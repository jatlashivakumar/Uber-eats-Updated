import React, { useState, useEffect } from 'react';
import { data, data1 } from '../components/data/data.jsx';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      if (searchQuery === '') {
        setFilteredData([]);
      } else {
        const query = searchQuery.toLowerCase();
        const results = [...data, ...data1].filter(item =>
          item.name.toLowerCase().includes(query)
        );
        setFilteredData(results);
      }
    };

    const debounce = setTimeout(filterData, 1000);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)}>
          {/* Menu icon */}
          <div style={{ fontSize: 30 }}>☰</div>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Uber <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center rounded-md p-2 text-[14px]'>
          <p className='bg-black text-white rounded-md p-2'>Delivery</p>
        </div>
      </div>

      {/* Search input */}
      <div className='bg-gray-200 rounded-md flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        {/* Search icon */}
        <div style={{ fontSize: 25 }}>🔍</div>
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Mobile Menu */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* Side Bar menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <div
          onClick={() => setNav(!nav)}
          style={{ fontSize: 30, position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}
        >
          ✖
        </div>
        <h2 className='text-2xl p-4'>
          Uber <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>🚚</span>
              Orders
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>❤️</span>
              Favourites
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>💼</span>
              Wallet
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>❓</span>
              Help
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>🏷️</span>
              Promotions
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>💾</span>
              Best Ones
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <span style={{ fontSize: 25 }} className='mr-4'>👫</span>
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>

      {searchQuery && (
        <div className='absolute top-[70px] left-0 w-full bg-white z-10 p-4'>
          {filteredData.length > 0 ? (
            <ul>
              {filteredData.map(item => (
                <li key={item.id} className='p-2 border-b'>
                  <img src={item.image} alt={item.name} className='w-20 h-20 inline-block mr-4' />
                  <span className='font-bold'>{item.name}</span> - {item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-center'>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
