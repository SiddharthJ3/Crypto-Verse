import React, { useState } from 'react'
import Navbar from "./Navbar"
import "./CoinsPage.css"
import { useParams } from "react-router-dom"
import { SingleCoin } from '../Config/api'
import axios from 'axios'
import { useEffect } from 'react'
import Insight from './Insight'


const CoinsPage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState();


  const fetchData = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='page3'>
      <Navbar />
      <div className='insights'>
        <span className='ref'>INSIGHTS.</span>
      </div>

      <div className='symbol'>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="150"
        />
      </div>

      <div className='name'>
        {coin?.name}
      </div>

      <div className='rank'>
        Rank: {coin?.market_cap_rank}
      </div>

      <div className='charts'>
        <Insight />
    </div>
  </div>
  )
}

export default CoinsPage;
