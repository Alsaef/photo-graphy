import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-500 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
