import React from 'react'
import './header.css'

const Nav = () => {
  return (
    <div className="nav">
        <a href="facebook.com">ABOUT US</a>
        <button className="btn-green" onClick="location.href='#' ">Log In</button>
    </div>
  )
}

export default Nav