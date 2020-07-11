import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

// Menu pada aplikasi untuk berpindah halaman
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className='nodecor'>
            Form Hitung
          </Link>
        </li>
        <li>
          <Link to='/daftar' className='nodecor'>
            Daftar Hitungan
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
