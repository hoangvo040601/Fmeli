import React from 'react';
// import fuLogo from "../../../assets/fusoft-logo.svg"
import fuLogo from "../../../assets/fumeli.jpg"
import "./Logo.scss"

const Logo = () => {
  return (
      <div className='logo'>
        <img className='logo-lg' src={fuLogo} alt="SVG" />
      </div>
  );
};

export default Logo;