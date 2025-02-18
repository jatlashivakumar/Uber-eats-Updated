import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../components/data/data.jsx'; 

const Food = () => {
    const [foods, setFoods] = useState(data);
    const navigate = useNavigate();

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    const handleOrderNow = () => {
        navigate('/order-confirmation');
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='font-bold'>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                        <div className='flex justify-center pb-4'>
                            <button 
                                className='border-none bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-900'
                                onClick={handleOrderNow}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
