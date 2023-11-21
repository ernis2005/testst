import React from "react";


export  function useScreenRecorder() {
    const [mediaStream, setMediaStream] = React.useState(null);
    const [recording, setRecording] = React.useState(false);
    const [data, setData] = React.useState(null)
    const mediaRecorderRef = React.useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            const combinedStream = new MediaStream([...stream.getVideoTracks(), ...audioStream.getAudioTracks()]);

            setMediaStream(combinedStream);

            const mediaRecorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });
            mediaRecorderRef.current = mediaRecorder;

            const chunks = [];
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                 
                    setData(event.data)
                }
            };
            
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                const videoURL = URL.createObjectURL(blob);
                // Здесь вы можете использовать videoURL для проигрывания видео на странице или выполнения других действий

                console.log('stop', videoURL)
            };

            getVideoChunksAndSend()

            mediaRecorder.start();
            setRecording(true);
        } catch (error) {
            console.error('Error accessing screen:', error);
        }
    };

    const stopRecording = () => {
        console.log('stopRecording')
        mediaRecorderRef.current?.stop();
        setMediaStream(null);
        setRecording(false);

        mediaRecorderRef.current = null;

        setData(null)
    };

    const getVideoChunksAndSend = () => {
        setTimeout(function () {
            if (mediaRecorderRef.current?.state === 'inactive') return
            mediaRecorderRef.current?.requestData()

            getVideoChunksAndSend()
        }, 3000)
    }

    return {
        startScreenRecording: startRecording,
        stopScreenRecording: stopRecording,
        isScreenRecording: recording,
        recordedData: data
    }
}