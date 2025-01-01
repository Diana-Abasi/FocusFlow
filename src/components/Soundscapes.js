import React, { useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Soundscapes() {
  const [currentSound, setCurrentSound] = useState('');

  const soundOptions = [
    { name: 'Rain', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { name: 'White Noise', url: 'https://file-examples.com/storage/feb2018/5021f2e79d63c9c5a2542892/2018/02/FileExample_MP3_700KB.mp3' },
    { name: 'Lo-fi Beats', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  ];

  return (
    <section className="soundscapes p-4 text-center">
      <h2 className="text-xl mb-4">Focus Soundscapes</h2>
      <select
        className="border p-2 rounded mb-4 w-full max-w-sm bg-white text-black"
        onChange={(e) => setCurrentSound(e.target.value)}
        value={currentSound}
      >
        <option value="" className="text-gray-500">
          Select a soundscape
        </option>
        {soundOptions.map((sound) => (
          <option key={sound.name} value={sound.url} className="text-black">
            {sound.name}
          </option>
        ))}
      </select>
      {currentSound && <ReactAudioPlayer src={currentSound} autoPlay controls />}
    </section>
  );
}

export default Soundscapes;
