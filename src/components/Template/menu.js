import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'
class Menu extends Component {
  render() {
    return (
        
        <header id="main-header">
        <div className="headercontent">
          <Link to="/sobre"> SOBRE </Link>
          <Link to="/afazeres"> COMEÇAR A LISTA </Link>
          <Link to="/home"> HOME </Link>
          </div>
        </header>

    );
  }
}

export default Menu;