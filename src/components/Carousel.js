import axios from "axios";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";


export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
    const [trending, setTrending] = useState([]);
  
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(`https://proxy-server-carousel.onrender.com/api/coins`);
  
      console.log(data);
      setTrending(data);
    };

useEffect(() => {
    fetchTrendingCoins();
}, []);

    const items= trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;



        return (
            <Link className="carouselItem" to={`/coin/${coin.id}`}>

            <div class="testing3">
                <img
                   src={coin?.image}
                   alt={coin.name}
                   height="80"
                   style={{ marginBottom: 10 }}
                />
                <span>{coin?.symbol}
                    &nbsp;
                    <span 
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                           >
                    <span>{profit && '+'}{coin?.price_change_percentage_24h?.toFixed(2)}%</span>
                    </span>
                </span>

                <span style={{ fontSize: 22, fontWeight: 500}}>
                    ${numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
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
        <div class="trending">Top 10 Trending Coins</div>
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

export default Carousel;
