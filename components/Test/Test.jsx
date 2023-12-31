'use client';
import React, { useEffect, useState } from 'react'

import useWebSocket, { ReadyState } from 'react-use-websocket';
import s from '../../app/test/page.module.scss'
import { BsTelephone } from 'react-icons/bs'
import { redirect, useRouter } from 'next/navigation';

import Image from 'next/image';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import VideoChat from '../VideoChat/VideoChat'
export const Svg = () => (
  <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19.95 21C17.8667 21 15.8083 20.5457 13.775 19.637C11.7417 18.7283 9.89167 17.441 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.28 14.2367 16.5173 14.216 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="white" />
  </svg>
)
const TestJS = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const userId = userInfo?.id
  
   
  const { sendMessage, lastMessage, readyState } = useWebSocket(`ws://185.251.88.75:8000/ws/room/${userId}/`);
  console.log(`ws://185.251.88.75:8000/ws/room/${userId}/`);
  const [isCalling, setIsCalling] = useState(false)
  const [isInCall, setIsInCall] = useState(false)
  const [callId, setCallid] = useState(null)
  const [lastMessageData, setLastMessageData] = useState()
  const [userFullName, setUserFullName] = useState()

  
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  console.log(userId, 'userId users ');
  console.log('connection status', connectionStatus[readyState], readyState, lastMessage);

  const handleNotification = () => {
    if (!("Notification" in window)) {
      alert("Этот браузер не поддерживает уведомления.");
    }  else if (Notification.permission === "granted") {
      const data = JSON.parse(lastMessage.data)
      new Notification("Звонок", {
        body: `${data.name}`,
        icon: `${data.image}`,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("Уведомление разрешено!");
        }
      });
    }
  };

  const router = useRouter();

  useEffect(() => {

    if (lastMessage !== null) {
      try {
        const data = JSON.parse(lastMessage.data)
        const type = data.type
        // consle.log('data',data );
   
        setLastMessageData(data)
        if (type === 'calling') {
          const userName = data.name
          const userImage = data.image
          setCallid(data.call_info_id)
     
          setIsCalling(true)
        } else if (type === 'disable') {
          if (!isInCall && !isCalling) return
          
          toast(("Звонок завершён"), {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          
          location.reload()
          setIsCalling(false)
          setIsInCall(false)
        } else if (type === 'decline') {
          if (!isCalling) return

          console.log('decline', );
          toast(("Звонок завершён"), {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setIsCalling(false)
          setIsInCall(false)
        } else if (type === 'answering') {
          // if (!isCalling) return
          
          // setIsInCall(true)
          setUserFullName(data.user_full_name)
        }
      } catch (e) {
        console.log('error', e);
      }
    }
  }, [lastMessage]);
 
  useEffect(() => {
    return () => {
      if (isInCall) handleEndCall()
    }
  }, [])
  const handleAnswerCall = () => {
    sendMessage(JSON.stringify({ type: 'answering', 'call_info_id': callId }))
    setIsInCall(true)
    setIsCalling(false)
  }
  const handleDeclineCall = () => {
    sendMessage(JSON.stringify({ type: 'decline', 'call_info_id': callId }))
    setIsCalling(false)
    setIsInCall(false)
  }
  const handleEndCall = () => {

    sendMessage(JSON.stringify({ type: 'disable', 'call_info_id': callId }))
    setIsCalling(false)
    setIsInCall(false)
    location.reload()
    toast(("Звонок завершён"), {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <div  >
      <ToastContainer
        className={s.ToastContainer}
        autoClose={1000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {isCalling && (
        <div className={s.module}>
          <div className={s.bloxk}>
            <span className={s.userInfo}>
              <div className={s.image}> {lastMessageData?.image !== null ? (<Image src={lastMessageData?.image} layout='fill' objectFit='cover' />) : (null)} </div>
              <h2> {lastMessageData.name} </h2>
            </span>
            <div className={s.buttons}>
              <button onClick={handleDeclineCall} className={s.Reject}>
                <div className={s.span}>
                  <Svg /></div>
                <p> Отклонить</p>
              </button>
              <button onClick={handleAnswerCall} className={s.Accept}>
                <div className={s.span}>
                  <Svg />
                </div>
                <p> Принять</p>
              </button>
            </div>
          </div>
        </div>
      )}
      {isCalling && (<audio autoPlay>
        <source src="/test1.mp3" type='audio/ogg; codecs=vorbis' />
        <source src="/test1.mp3" type="audio/mpeg" />
        Тег audio не поддерживается вашим браузером. <a href="/test1.mp3">Скачайте музыку</a>.
      </audio>)}
      {isCalling && (<button onClick={handleNotification()}>
      </button>)}
      {isInCall &&
        <div className={s.module1}>
          <VideoChat handleEndCall={handleEndCall}    name={userFullName} />
        </div>
      }
    </div>
  )
}

export default TestJS

