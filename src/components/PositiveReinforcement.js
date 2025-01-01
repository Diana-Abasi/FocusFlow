import React from 'react';
import Confetti from 'react-confetti';

function PositiveReinforcement({ isVisible, message }) {
  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">{message}</h2>
          </div>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
    </>
  );
}

export default PositiveReinforcement;
