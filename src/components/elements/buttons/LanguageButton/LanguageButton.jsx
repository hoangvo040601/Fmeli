import React from 'react';
import { CaretDown } from '@phosphor-icons/react';
import './LanguageButton.scss'


const LanguageButton = () => {
  return (
    <div className='language-container'>
      <div className='language-title'>English</div>
      <div className='footer-languege-icon'><CaretDown size={12} /></div>
    </div>
  );
};

export default LanguageButton;