import React from 'react';
import Auth from '../../elements/auth/Auth';
import Logo from '../../elements/logo/Logo';
import "./Header.scss"

const Header = () => {
  return (
    <div className='header-container'>

      <div className='header-logo'>
        <Logo/>
      </div>

      <div className='header-auth'>
        <Auth/>
      </div>

    </div>
  );
};

export default Header;