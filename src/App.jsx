import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HandlineCards';
import Food from './components/Food';
import Category from './components/Category';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HeadlineCards />
            <Food />
            <Category />
          </>
        } />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
