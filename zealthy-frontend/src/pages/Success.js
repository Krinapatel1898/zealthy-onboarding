import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="bg-[#113c51] p-10 rounded-xl shadow-xl text-center text-white max-w-md w-full">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">
          Onboarding Complete!
        </h2>
        <p className="text-gray-300 mb-6">
          Thank you for submitting your details. We're excited to have you on board!
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
