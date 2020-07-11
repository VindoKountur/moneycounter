import React, { Component } from 'react';
import './style.css';

// Class component
export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>Money Counter</h1>
        <p>Aplkasi sederhana untuk menghitung jumlah uang</p>
      </header>
    );
  }
}
