import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data1 } from './data/data'; 

const HeadlineCards = ({ data }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-confirmation');
  };

  return (
    <>
      <div className='flex justify-start ml-2 items-center'>
        <h1 className='font-bold bg-slate-400 border-none p-2 rounded-md hover:scale-105 hover text-3xl mt-6'>Menu</h1>
      </div>
      <div className='max-w-[1640px] mx-2 py-6 grid md:grid-cols-3 gap-6'>
        {data1.map(item => (
          <div key={item.id} className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>{item.restaurant}</p>
              <p className='px-2'>{item.name}</p>
              <button 
                className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white'
                onClick={handleOrderNow}
              >
                Order Now
              </button>
            </div>
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeadlineCards;
