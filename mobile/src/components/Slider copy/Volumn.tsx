import React from 'react'

const Volume: React.FC = () => {
  const handleVolumeChange = (volume: number) => {
    console.log('Volume changed:', volume);
  };

  return (
    <div>
      <h1>Volume Control</h1>
      <VolumeSlider onChange={handleVolumeChange} />
    </div>
  );
};

export default Volume;
