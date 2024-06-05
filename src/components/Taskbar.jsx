import React from 'react';

const Taskbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <button className="text-white">Start</button>
        <button className="text-white">Search</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white">Task</button>
        <button className="text-white">Notification</button>
      </div>
    </div>
  );
};

export default Taskbar;
