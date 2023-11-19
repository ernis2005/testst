import React, { useState, useEffect, useRef } from "react";
import useWebSocket from "react-use-websocket";
 import s from './page.module.scss'
import { BiMicrophoneOff } from "react-icons/bi";
const Participant = ({ participant, isMicMuted,height,isVideoEnabled }) => {



  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();
 const [isAudio , setIsAudio ] = useState(true)

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap?.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

    useEffect(() => {
    // console.log(participant,'test');
    setVideoTracks(trackpubsToTracks(participant?.videoTracks));
    setAudioTracks(trackpubsToTracks(participant?.audioTracks));
    
    
    const trackSubscribed = (track) => {
      console.log(track,'track');
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else if (track.kind === "audio") {
        console.log('audio track')
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);
  return (
    <div className={s.participant}>
      <h3>{participant?.identity}</h3>
      {isMicMuted === true  &&   <div className={s.audioUsers}>
      <BiMicrophoneOff />
     </div>
    }
     
      <video ref={videoRef} autoPlay={true}  />
      <audio ref={audioRef} autoPlay={isAudio}  />
    </div>
  );
};

export default Participant;