import React from 'react';

const Window = ({ title }) => {
  return (
    <div className="w-1/2 h-1/2 bg-white border border-gray-800 rounded shadow-lg">
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <span>{title}</span>
        <button className="text-white">X</button>
      </div>
      <div className="p-4">
        <p>Window Content</p>
      </div>
    </div>
  );
};

export default Window;
