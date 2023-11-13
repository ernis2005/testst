'use client';
import React, { useEffect, useState } from 'react'
import VideoChat from './VideoChat'
import useWebSocket, { ReadyState } from 'react-use-websocket';

const page = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket('ws://192.168.89.9:5002');
  const [isCalling, setIsCalling] = useState(false)
  const [isInCall, setIsInCall] = useState(false)

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  console.log('connection', connectionStatus)
  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const data = JSON.parse(lastMessage.data)
        const type = data.type
        if (type === 'calling') {
          const userName = data.user_name
          const userImage = data.user_image
          setIsCalling(true)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }, [lastMessage]);
  const handleAnswerCall = () => {
    sendMessage(JSON.stringify({ type: 'answer_call' }))
    setIsInCall(true)
    setIsCalling(false)
  }
  const handleDeclineCall = () => {
    sendMessage(JSON.stringify({ type: 'decline_call' }))
    setIsCalling(false)
  }
  return (
    <div>
      {/* {isCalling && ( */}
        <div>
          <button onClick={handleAnswerCall} className='px-4 py-2 rounded-xl text-white bg-green-500'>Answer</button>
          <button onClick={handleDeclineCall} className='px-4 py-2 rounded-xl text-white bg-red-500'>Decline</button>
        </div>
       {/* )} */}

      {isInCall && <VideoChat />}
    </div>
  )
}

export default page
