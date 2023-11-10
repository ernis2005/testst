'use client';

import React, { useEffect, useState, useRef } from 'react';
import Video from 'twilio-video';
import './VideoChat.css';

function VideoChat() {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const localVideoRef = useRef(null);
  console.log(room);
  useEffect(() => {
    const connectToRoom = async () => {
      try {
        const response = await fetch(
          `http://192.168.89.9:5001/token?identity=ernis&room=Operator2`,
        );

        const { token } = await response.json();
        console.log(token);
        const newRoom = await Video.connect(token, {
          name: 'my-room',
          audio: true,
          video: { width: 640 },
        });

        setRoom(newRoom);

        // Добавляем локальный видеопоток
        const videoTrack = await Video.createLocalVideoTrack();
        const trackElement = videoTrack.attach();

        localVideoRef.current.appendChild(trackElement);
      } catch (error) {
        console.error('Error connecting to the room:', error);
      }
    };

    connectToRoom();

    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (room) {
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);

      room.participants.forEach(participantConnected);
    }

    return () => {
      if (room) {
        room.off('participantConnected', participantConnected);
        room.off('participantDisconnected', participantDisconnected);
      }
    };
  }, [room]);

  const participantConnected = (participant) => {
 
    setParticipants((prevParticipants) => [...prevParticipants, participant]);
  };

  const participantDisconnected = (participant) => {

    setParticipants((prevParticipants) =>
      prevParticipants.filter((p) => p !== participant),
    );
  };
  console.log(localVideoRef, 'hrllo')
  console.log(participants,'participants');
  return (
    <div className="video-chat-container">
      <div ref={localVideoRef} 
      className="local-video-container"
      style={{
        width: 200, height: 200, background: 'black'
      }}
      ></div>
      {participants.map((participant) => (
          <div key={participant.sid} className="participant-container">
            <p>{participant.identity}</p>
            <video
                      key={participant.sid}
                      autoPlay
                      ref={(ref) =>{
                        console.log(participant.attach ,'hello') 
                        // return track.attach(ref) 
                      }}/>
          </div>
        ))}
    </div>
  );
}

export default VideoChat;
// {participants.map((participant) => (
//   <div key={participant.sid} className="participant-container">
//     <p>{participant.identity}</p>
//     <div className="remote-video-container">
//       {Array.from(participant.videoTracks.values()).map((track) => (
//         <video
//           key={track.sid}
//           autoPlay
//           ref={(ref) =>{
//             console.log(track.attach ,'hello') 
//             // return track.attach(ref) 
//           }}
//         />
//       ))}
//     </div>
//   </div>
// ))}
