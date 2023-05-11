import React from 'react'
import './Navbar.scss'
import logo from '../../Assets/logo.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='brand'>
                <img className='logo' src={logo} />
                <p>Chronicle</p>
            </div>
            <div className='btn'>Join Beta</div>
        </div>
    )
}

export default Navbar