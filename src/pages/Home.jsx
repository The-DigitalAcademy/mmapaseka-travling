import React from 'react';
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Destinations from '../components/Destinations'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Showcase/>
        <Destinations/>
        <Footer/>
    </div>

  );
}

export default Home