'use client';

import Participant from '@/app/test/Participant';
import axios from 'axios';
import { redirect } from 'next/navigation';

import React from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import Video from 'twilio-video';

export const VideoChatUser = () => {
    const [room, setRoom] = React.useState(null);
    const [lastMessageData, setLastMessageData] = React.useState()

    const [participants, setParticipants] = React.useState([]);
 const [cameraIndexFo, setCameraIndexFo] = React.useState(2)
   const [participantCamEnabled, setParticipantCamEnabled] = React.useState(true)
  const [participantMicEnabled, setParticipantMicEnabled] = React.useState(true)
  const [Chat_id,setChat_id]= React.useState()
    console.log(lastMessageData, 'dataLastMessage');
   
    React.useEffect(() => {
        const localStorages = localStorage
        const returnFormData = JSON.parse(localStorages.getItem("userToken"));
        const connectToRoom = async () => {
            console.log(returnFormData, 'header');
            try {
                const response = await axios.get(
                    'http://185.251.88.75/api/general/get_video_token/', // `http://185.251.88.75/api/general/get_video_token/`,
                    {
                        headers: {
                            Authorization: `Bearer ${returnFormData}`
                        }
                    }
                );
                const { token ,chat_id } = await response.data;
                await setChat_id(chat_id);
                         console.log(response.data, 'test');
                const newRoom = await Video.connect(token, {
                    name: " my-Cha",
                    //  response.data.room,
                    audio: true,
                    video:{width:400}
                }).catch(e => console.log('video connect err', e));
                //${response.data.uliid}
              
                console.log(response);
                setRoom(newRoom);
            } catch (error) {
                alert(error)
            }
        }
        connectToRoom()
        return () => {
            if (room) {
                room.disconnect();
            }
        };
    }, []);
    const { sendMessage, lastMessage, readyState } =   useWebSocket(`ws://185.251.88.75:8000/ws/room/${Chat_id}/`);
    React.useEffect(() => {
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
    // const connectionStatus = {
    //     [ReadyState.CONNECTING]: 'Connecting',
    //     [ReadyState.OPEN]: 'Open',
    //     [ReadyState.CLOSING]: 'Closing',
    //     [ReadyState.CLOSED]: 'Closed',
    //     [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    // }[readyState];
    

    React.useEffect(() => {
        if (lastMessage !== null) {
        try {
            const data = JSON.parse(lastMessage.data)
            const type = data.type
            setLastMessageData(data)
            if (type === 'calling') {
            const userName = data.name
            const userImage = data.image
            setCallid(data.call_info_id)
            console.log(data, "data");
            setIsCalling(true)
            } else if (type === 'disable') {
     
            } 
        } catch (e) {
            console.log(e)
        }
        }
    }, [lastMessage]);
     const  redirectPage =()=> {
        redirect("/")
     }
     console.log(participants, '   {room &&  ');
    return (
        <div>
            {room && <p> test</p>}
            {lastMessageData?.type == "disable" && <p  onClick={redirectPage()}>{lastMessageData.type}</p>}

            <div >
            {cameraIndexFo === 1 ? (
              room && <Participant participant={room.localParticipant} height={400} />
            ) : (
              participants.length > 0 && (
                <div > 
                <Participant 
                  participant={participants[participants.length - 1]} 
                  height={''} 
                  isMicMuted={!participantMicEnabled} 
                  isVideoEnabled={participantCamEnabled}
                />
                </div>
            )
            )}
          </div>
        </div>
    )
}
