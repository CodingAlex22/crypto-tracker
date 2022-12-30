import axios from "axios";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";


export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CarouselExchange = () => {
    const [trending, setTrending] = useState([]);
  
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1`);
  
      console.log(data);
      setTrending(data);
    };

useEffect(() => {
    fetchTrendingCoins();
}, []);

    const items= trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;



        return (
            <Link className="carouselItem" to={{ pathname: `${coin.url}`}} target="_blank"> 
            
            <div class="testing4">
                <img
                   src={coin?.image}
                   alt={coin.name}
                   height="80"
                   style={{ marginBottom: 10 }}
                />
                <div class="names">
                <span>{coin?.name}</span>
                <span>{coin?.country}</span>
                <span>Year Est. {coin?.year_established}</span>
                <p class ="volume">24h BTC Vol: {numberWithCommas(coin?.trade_volume_24h_btc.toFixed(2))}</p>
                <span>Trust Rank: {coin?.trust_score_rank}</span>
                </div>    
                </div>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }

    return <div>
        <div class="trending">Top 10 Exchanges</div>
        <AliceCarousel 
    mouseTracking
    infinite
    autoPlayInterval={1000}
    animationDureaction={1500}
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    autoPlay
    items={items}
    /></div>
    
}

export default CarouselExchange;
