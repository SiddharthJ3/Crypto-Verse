import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from 'axios'
import { State } from './Context';
import { TrendingCoins } from '../Config/api';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Banner = () => {

  const [trending, setTrending] = useState([]);

  const { currency } = State();

  const fetchData = async () => {
    const { data } = await axios.get(TrendingCoins(currency))

    setTrending(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);


  const responsive = {
    0: {
      items: 2,
    },

    512: {
      items: 4,
    }
  };

  const items = trending.map((coin) => {

    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link className='cr-item' to={`/coins/${coin.id}`}>

        <img src={coin?.image} alt={coin.name} height="80" style={{}} />

        <span>
          <h5 style={{ fontSize: 20, backgroundColor: "white", marginBottom: 10, color: "black", fontFamily: "Roboto" }}>{coin.name}</h5>
          <span style={{
            color: profit > 0 ? "rgb(14, 203, 129" : "red",
            fontWeight: 500
          }}>


            &nbsp;
            &nbsp;

            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%

          </span>
        </span>
      </Link>
    )
  })


  return (
    <div className='page1'>
      <div className='seperate'></div>
      <div style={{ fontFamily: "Raleway", fontSize: 30 }}> </div>

      <div className='spot'>
        <div className="wrapper">
          <div className="static-txt">:</div>
          <ul className="dynamic-txts">
            <li><span>BitCoin</span></li>
            <li><span>Ethereum</span></li>
            <li><span>Shiba Inu</span></li>
            <li><span>BinanceUSD</span></li>
          </ul>
        </div>
      </div>


      <div className='circle' />
      <div className='line' />

      <div className='trend'>
        <Fade right>
          <h2 data-text='⇆ TRENDING ⇆'>⇆ TRENDING ⇆</h2>
        </Fade>
      </div>

      <div className='carousel'>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
          items={items}
        />
      </div>

    </div>
  )
}

export default Banner;



