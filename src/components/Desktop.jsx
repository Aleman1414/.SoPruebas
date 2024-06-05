import React from 'react';
import Window from './Window';

const Desktop = () => {
  return (
    <div className="h-screen bg-blue-500 flex justify-center items-center">
      <Window title="My Computer" />
    </div>
  );
};

export default Desktop;
