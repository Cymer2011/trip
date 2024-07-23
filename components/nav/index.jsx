import React from 'react'
import '../../src/App.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <h2><span  style={{color:'blue'}}>Trip</span><span style={{color:'#002248'}}>Goal</span><span style={{color:'#00B3A0'}}><strong>.</strong></span></h2>
        <div className="links">
        <a className='active' href="">Home</a>
        <a href="">About</a>
        <a href="">Packages</a>
        <a href="">Contact Us</a>
        <a href="">Faq</a>
        </div>
        <h5 className='button' href="">Register</h5>
    </div>
  )
}

export default Navbar