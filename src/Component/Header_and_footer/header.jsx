import './header.css';
import React from 'react';
import logo from '../../Asset/logo/logoB-removebg-preview.png'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
     <div> 
<nav>

  <img src={logo} alt="logo" className="logonav"/>

<ul className="menu">
  
  <li><Link to="/">Home</Link></li>
  <li><Link to="/">Pack</Link></li>
  <li><Link to="/profilePage">Profile</Link></li>
</ul>
</nav>
        </div>
    )
}