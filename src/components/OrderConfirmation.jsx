import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70">
      <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center max-w-md">
        <p className='bg-green-100 text-green-800 p-4 rounded-md text-center font-semibold mb-4'>
          Order placed successfully! Your order will be delivered shortly by our agent.
        </p>
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
