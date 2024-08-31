import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'


function App() {
  const [coins, setCoins]= useState([])

  const url = 'https://proxy-server-app.onrender.com/api/coins'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Coins coins={coins} />} />
      <Route path='/coin' element={<Coin />}>
        <Route path=':coinId' element={<Coin />} />
      </Route>
    </Routes>

  </>
  );
}

export default App;
