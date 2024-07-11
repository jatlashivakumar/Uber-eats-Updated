import React from 'react';
import { categories } from './data/data.jsx'; 

const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-2'>
        {categories.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <h2 className='text-lg font-bold text-center py-2'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
