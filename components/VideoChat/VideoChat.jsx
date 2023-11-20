'use client';
import React, { useEffect, useState, useRef } from 'react';
import Video from 'twilio-video';
import Participant from '../../app/test/Participant';

import useWebSocket, { ReadyState } from 'react-use-websocket';
import axios from 'axios';
import s from '../../app/test/page.module.scss'

import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import { useSelector } from 'react-redux';

import { useScreenRecorder } from "../../hooks/useScreenRecorder"

export const Svg = () => (
  <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19.95 21C17.8667 21 15.8083 20.5457 13.775 19.637C11.7417 18.7283 9.89167 17.441 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.28 14.2367 16.5173 14.216 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="white" />
  </svg>
)
function VideoChat({ handleEndCall }) {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const localVideoRef = useRef(null);
  const [isAudio, setIsAudio] = useState(true)
  const [cameraIndexFo, setCameraIndexFo] = useState(2)
  const [isCamera, setIsCamera] = useState(true)
  const [participantCamEnabled, setParticipantCamEnabled] = useState(true)
  const [participantMicEnabled, setParticipantMicEnabled] = useState(true)

  const { startScreenRecording, stopScreenRecording, recordedData } = useScreenRecorder()

  const roomName = room?.name
  const { sendMessage, lastMessage, readyState } = useWebSocket(`ws://185.251.88.75:8000/ws/record/${roomName}/`);
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];


  useEffect(() => {
    console.log(isFirstTime);
    setIsFirstTime(false);
    const connectToRoom = async () => {
      try {
        console.log('connectToRoom')
        const id = await JSON.parse(localStorage.getItem('userToken'));
        const bearerToken = await id
        const response = await axios.get(
          'http://185.251.88.75/api/general/get_video_token/', // `http://185.251.88.75/api/general/get_video_token/`,
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`
            }
          }
        );
        const { token } = await response.data;
        console.log('roomName', response.data)
        console.log(token);
        const newRoom = await Video.connect(token, { 
          name: response.data.room,
          audio: true,
          video: { width: '400px' }
        }).catch(e => console.log('video connect err', e));
        
        console.log(newRoom, 'newRoom');
        setRoom(newRoom);

        startScreenRecording()
        // Добавляем локальный видеопоток
      } catch (error) {
        console.error('Error connecting to the room:', error);
      }
    };
    connectToRoom();
    return () => {
      if (room) {
        room.disconnect();
        stopScreenRecording()
      }
    };
  }, []);

  useEffect(() => {
    if (room) {
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.on('trackDisabled', handleTrackDisabled)
      room.on('trackEnabled', handleTrackEnabled)
      room.participants.forEach(participantConnected);
      console.log('p', room.participants)
    }
    return () => {
      if (room) {
        room.off('participantConnected', participantConnected);
        room.off('participantDisconnected', participantDisconnected);
        room.off('trackDisabled', handleTrackDisabled)
        room.off('trackEnabled', handleTrackEnabled)
      }
    };
  }, [room]);

  const participantConnected = (participant) => {
    console.log('participantConnected', participant)
    setParticipants(
      (prevParticipants) => [...prevParticipants, participant]
    );
  };
  
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const participantDisconnected = (participant) => {
    handleEndCall()
    console.log('disconnected ' + participant)
    setParticipants((prevParticipants) =>
      prevParticipants.filter((p) => p !== participant),
    );
  };
  const handleTrackDisabled = (track) => {
    if (track.kind === 'audio') {
      setParticipantMicEnabled(false)
    } else if (track.kind === 'video') {
      setParticipantCamEnabled(false)
    }
  }
  const handleTrackEnabled = (track) => {
    if (track.kind === 'audio') {
      setParticipantMicEnabled(true)
    } else if (track.kind === 'video') {
      setParticipantCamEnabled(false)
    }
  }
  const handleVideoEnabledStatus = () => {
    room.localParticipant.videoTracks.forEach((videoTrackPublication) => {
      if (videoTrackPublication.track) {
        if (isCamera) {
          videoTrackPublication.track.disable();
        } else {
          videoTrackPublication.track.enable();
        }
      }
    });
    setIsCamera(!isCamera)
  }
  const handleAudioEnabledStatus = () => {
    room.localParticipant.audioTracks.forEach((audioTrackPublication) => {
      if (audioTrackPublication.track) {
        if (isAudio) {
          audioTrackPublication.track.disable();
        } else {
          audioTrackPublication.track.enable();
        }
      }
    });
    setIsAudio(!isAudio)
  }
  console.log(participants, '   {room &&  ');

  useEffect(() => {
    if (recordedData) { 
      console.log('sendRecordedData')
      sendMessage(recordedData); 
    }
  }, [recordedData])

  const mute = () => {
    participants.forEach(e => e.videoTracks[0].disable())
  }
  //  console.log(room.localParticipant ,' test ');

  return (
    <div className={s.VideoChat}>

      <div className={s.VideoChat1}>
        {cameraIndexFo === 1 ? (
          room && <Participant participant={room.localParticipant} height={400} />
        ) : (
          participants.length > 0 && (
            <div >
              <Participant
                participant={participants[participants.length - 1]}
                height={''}
                isMicMuted={!participantMicEnabled}
                isVideoEnabled={!participantCamEnabled}
              />
            </div>
          )
        )}

      </div>
      <div className={s.roomVideoChats}>
        <div className={s.roomVideoChat} >

          {cameraIndexFo === 2 ? (
            room && <Participant participant={room.localParticipant} height={400} />
          ) : (
            participants.length > 0 && (
              <div >
                <Participant
                  participant={participants[participants.length - 1]}
                  height={400}
                  isMicMuted={!participantMicEnabled}
                  isVideoEnabled={!participantCamEnabled}
                />
              </div>
            )
          )}
        </div>
      </div>
      {room && (<h1 className={s.time}>{formatTime(time)}</h1>
      )}
      {room && <div className={s.Buttos}>
        <div>
          <button onClick={handleVideoEnabledStatus} className={s.Camera}>
            <div className={s.span}>
              {isCamera === true ? (<BsCameraVideo />) : (<BsCameraVideoOff />)}
            </div>
            {isCamera === true ? (<p> Выкл.видео</p>) : (<p> Вкл.видео</p>)}
          </button>
          <button onClick={handleAudioEnabledStatus} className={s.Camera}>
            <div className={s.span}>
              {isAudio === true ? (<BiMicrophone />) : (<BiMicrophoneOff />)}
            </div>
            {isAudio === true ? (<p> Выкл.звук</p>) : (<p> Вкл.звук</p>)}
          </button>
          <button onClick={() => handleEndCall()} className={s.Reject}>
            <div className={s.span}>
              <Svg /></div>
            <p> Завершить</p>
          </button>
        </div>
      </div>}

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
//    {participants.filter(res, => participants.indexOf(res.identity) ===).map((participant, i) => (
