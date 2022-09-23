
import './Button.css'
import React, { Children } from 'react'
import image from './image/lady.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import './Button.css'


const firstDiv = document.getElementsByClassName('.container')

let isOpened = true

const handleClick = () => {
    if (isOpened===true) {
       
        isOpened = false
        firstDiv.style.display = "flex"
    } else {
       
        isOpened = true
        firstDiv.style.display = "none"
    }
   
}

export const Button = ({
    
}) => {
    
    return (
   <button  style={{ backgroundImage: `url(${image})` }} onClick={handleClick}>
    
    <div className="container">
        <div className="wrapper1">
       <div className='profile'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<h1>My Profile</h1>
       </div>
<div className='word'>
  
    <p>Change setting of your account</p>
</div>
        </div>
    <hr style={{width:'100%'}} />
    <div className="last">
        <div className="vl"></div>
    <svg id='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

<h1 className='log'>Logout</h1>

    </div>
    </div>
   </button>
   
   

   
        )
        console.log('okay')
}
