import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Foods <span className='text-orange-500'>Delivered</span>
          </h1>
        </div>
        <img
          className='w-full h-full object-cover max-h-[500px]'
          src='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=400'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Hero;
