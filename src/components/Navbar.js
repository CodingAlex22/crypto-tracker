import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'> 
    <div>
        <div className='navbar'>
            <img src ="https://i.ibb.co/sJtWfw2/xcoin-logo44.png"></img>
        </div>
    </div>
    </Link>
  )
}

export default Navbar