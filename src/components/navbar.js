import React from 'react'
import './css/navbar.css'
import logo from './img/QuikieLogo.png'
function Navbar() {
    return (
        <>
            <nav className="nvbgjs">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="136" height="70"></img>
            </a>
            </nav>
        </>
    )
}


export default Navbar
