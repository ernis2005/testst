'use client';
import React, { useEffect, useState, useRef } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import './VideoChat.css';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import axios from 'axios';

function VideoChat({ handleEndCall }) {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const localVideoRef = useRef(null);

  

  useEffect(() => {
    console.log(isFirstTime);
    setIsFirstTime(false);
    const connectToRoom = async () => {
      try {

        console.log('connectToRoom')

        const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1MTQ5NjExLCJpYXQiOjE2OTk5NjU2MTEsImp0aSI6IjA4NTcwYmQxNWJiYjRmMGVhMWIyMDAxOGVjNTVkODc5IiwidXNlcl9pZCI6MTA5fQ.ww8KI2pISSvZmGlbWAEldLoIioJVcLod0UO32IhsKkI'// localStorage.getItem('token')
        const response = await axios.get(
          `http://185.251.88.75/api/general/get_video_token/`,
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`
            }
          }
        );
        const { token } = await response.data;
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
      // room.on('participantConnected', participantConnected);
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
    handleEndCall()
    console.log('disconnected ' + participant)
    setParticipants((prevParticipants) =>
      prevParticipants.filter((p) => p !== participant),
    );
    
  };
  console.log(participants);

  const mute = () => {
    participants.forEach(e => e.videoTracks[0].disable())
  }

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
