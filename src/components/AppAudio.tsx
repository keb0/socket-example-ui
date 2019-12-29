import React, { useState, useEffect } from 'react';

declare const MediaRecorder: any;

const ws = new WebSocket('ws:localhost:5001');

export default function AppAudio() {
  const [audio, setAudio] = useState([]);
  const chunks = [];

  useEffect(() => {
    ws.onopen = () => {};
  });

  function blobToArrayBuffer(blob: Blob) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.readAsArrayBuffer(blob);
    });
  }

  function audioRecorder() {
    const constraints = { audio: true };
    const options = { mimeType: 'audio/ogg' };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream, options);

        // ３秒後に停止
        setTimeout(() => {
          mediaRecorder.stop();
          stream.getAudioTracks()[0].stop();
        }, 3000);

        mediaRecorder.ondataavailable = e => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = async e => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          const test = await blobToArrayBuffer(blob);
          ws.send("aaa");
          // ws.send(blob);

          // setAudio([...audio, blobToArrayBuffer(blob)]);
        };

        mediaRecorder.start();

        mediaRecorder.onerror = e => {
          console.error(`error recording stream: ${e.error.name}`);
        };
      })
      .catch(e => {
        console.error(`error recording stream: ${e.error.name}`);
      });
  }

  return (
    <div>
      <button type="button" onClick={() => audioRecorder()}>
        Click
      </button>
    </div>
  );
}
