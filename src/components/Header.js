import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';

const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between items-center">
      {/* logo */}
      <Link to='/'>
        <img src={Logo} alt="" />
      </Link>
      {/* Buttons */}
      <div className='flex items-center gap-6'>
        <Link  className='hover:text-violet-900 transition' to=''>Log In</Link>
        <Link  className='bg-violet-700 hover:text-violet-800 transition text-white px-4 py-3 rounded-lg ' to=''>Sign up</Link>
       
      </div>
    </div>
  </header>;
};

export default Header;
