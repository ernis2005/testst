
'use client';
import React, { useState, useRef, useEffect } from 'react';

export default ScreenRecorder = ({ isRecording = false, onDataAvailable }) => {
  const [mediaStream, setMediaStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const webSocketRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setMediaStream(stream);

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      mediaRecorderRef.current = mediaRecorder;

      const chunks = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            onDataAvailable(event.data)

          chunks.push(event.data);
          if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
            
          }
        }
      };
      mediaRecorder.onstop = () => {
        if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
          webSocketRef.current.send(JSON.stringify({ type: 'endRecording' }));
        }

        const blob = new Blob(chunks, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        // Здесь вы можете использовать videoURL для проигрывания видео на странице или выполнения других действий
      };

      getVideoChunksAndSend()

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing screen:', error);
    }
  };

  const stopRecording = () => {
    if (!recording) return

    if (mediaRecorderRef.current && mediaStream) {
      mediaRecorderRef.current.stop();
      mediaStream.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  const getVideoChunksAndSend = () => {
    setTimeout(function () {
        mediaRecorderRef.current.requestData()

        getVideoChunksAndSend()
      }, 3000)
  }

  useEffect(() => {
    if (isRecording) {
        startRecording()
    } else {
        stopRecording()
    }
  }, [isRecording])
};
