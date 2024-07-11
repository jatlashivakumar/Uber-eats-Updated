import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiFillTag } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { BsFillSaveFill } from 'react-icons/bs';
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
          <AiOutlineMenu size={30} />
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
        <AiOutlineSearch size={25} />
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
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute top-4 right-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <MdFavorite size={25} className='mr-4' />
              Favourites
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <BsFillSaveFill size={25} className='mr-4' />
              Best Ones
            </li>
            <li className='text-xl py-4 flex cursor-pointer'>
              <FaUserFriends size={25} className='mr-4' />
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
