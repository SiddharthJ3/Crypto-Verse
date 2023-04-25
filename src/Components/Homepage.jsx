import React from 'react'
import Banner from './Banner';
import CoinsTable from './CoinsTable';
import "./Homepage.css"
import Navbar from './Navbar';


const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <CoinsTable />
    </div>
  )
}

export default Homepage;
