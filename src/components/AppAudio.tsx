import React, { useState, useEffect } from 'react';

declare let MediaRecorder: any;

export default function AppAudio() {
  const [chunks, setChunks] = useState([]);

  useEffect(() => {});

  async function audioRecorder() {
    const constraints = { audio: true };
    const options = { mimeType: 'audio/ogg' };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const mediaRecorder = new MediaRecorder(stream, options);

    // ３秒後に停止
    setTimeout(() => {
      mediaRecorder.stop();
      stream.getAudioTracks()[0].stop();
    }, 3000);

    mediaRecorder.onstop = e => {
      const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'audio.ogg';
      a.click();
    };

    mediaRecorder.ondataavailable = e => {
      setChunks([...chunks, e.data]);
    };

    mediaRecorder.onerror = e => {
      console.error(`error recording stream: ${e.error.name}`);
    };

    mediaRecorder.start();
  }

  return (
    <div>
      <button type="button" onClick={() => audioRecorder()}>
        Click
      </button>

      <a href="/#">Download</a>
    </div>
  );
}
