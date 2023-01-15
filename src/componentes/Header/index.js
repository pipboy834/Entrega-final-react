import React from 'react'
import { Link } from 'react-router-dom'
import Nike from  "../../assets/images/Nike.jpg"
export const Header = () => {
  return (
    <header>

        <Link to='/'>
            <div className='logo'>
                <img src={Nike} alt='' width="150px"/>

            </div>
        </Link>
        <ul>
            <li>          
                <Link to='/'>INICIO</Link>
            </li>
            <li>
                <Link to='/productos'>PRODUCTOS</Link>
            </li>
        </ul>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>0 </span>

        </div>
    </header>

  )
}
