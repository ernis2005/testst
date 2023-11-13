'use client';
import React, { useEffect, useState, useRef } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import './VideoChat.css';

function VideoChat() {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const localVideoRef = useRef(null);

  useEffect(() => {
    console.log(isFirstTime);
    setIsFirstTime(false);
    const connectToRoom = async () => {
      try {
        // const videoTrack = await Video.createLocalVideoTrack();
        // const trackElement = videoTrack.attach();

        // localVideoRef.current.appendChild(trackElement);

        const response = await fetch(
          `http://192.168.89.9:5001/token?identity=ernisfdgfdfg&room=Operator2`,
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

  console.log(participants);
  return (
    <div className="video-chat-container">
      {room && <Participant participant={room.localParticipant} />}
      {participants.map((participant, i) => (
        <div key={i} className="participant-container">
          <Participant participant={participant} />
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
