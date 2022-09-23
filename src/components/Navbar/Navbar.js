import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import {Button} from '../Button'

class Navbar extends Component {
    state = { 
        clicked:false
     } 
    render() { 
        return (
           <div className="wrapper">
             <nav className='NavbarItems'>
                <h1 className="navbar-logo">LOGO</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item,index) => {
           return(
            <li key={index}>
            <a className='item.cName' href={item.url}>
                {item.title}
            </a>
        </li>
           )
                    })}
                   
                </ul>
                <Button></Button>
            </nav>
           </div>
        );
    }
}
 
export default Navbar;

