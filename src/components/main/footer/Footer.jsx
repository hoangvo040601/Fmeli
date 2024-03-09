import React from 'react';
import Logo from '../../elements/logo/Logo';
import { EnvelopeSimple, FacebookLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react';
import "./Footer.scss"
import LanguageButton from '../../elements/buttons/LanguageButton/LanguageButton';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <Logo />
      </div>
      <h2 className='footer-title'>Gửi yêu Cầu</h2>
      <div className='footer-form'>
        <EnvelopeSimple className='footer-form-icon' size={22} />
        <input type="email" id="email" name="email" placeholder='Email của bạn' />
        <button className='footer-form-button'>Gửi</button>
      </div>
      <div className='footer-more'>
        <ul>
          <li className='footer-more-wraper'>
            <h4 className='footer-more-title'>Công ty</h4>
            <p>Về chúng tôi</p>
          </li>
          <li className='footer-more-wraper'>
            <h4 className='footer-more-title'>Thể Lệ</h4>
            <p>Chính sách bảo mật</p>
            <p>Điều khoản & Điều kiện</p>
            <p>FAQ</p>
          </li><li className='footer-more-wraper'>
            <h4 className='footer-more-title'>Hợp Tác</h4>
            <p>Đối tác của chúng tôi</p>
            <p>Contact us</p>
          </li>
          <li className='footer-more-wraper'>
            <h4 className='footer-more-title'>Liên Hệ</h4>
            <p>Địa chỉ: 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh</p>
            <p>Hotline: 028.2200.0113</p>
            <p>Email: info@fusoft.vn</p>
          </li>
        </ul>
      </div>
      <div className='footer-net'>
        <div className='footer-language'>
          <LanguageButton />
        </div>
        <div className='footer-pricy'>@ 2023 FuSoft Company . Privacy . Terms . Sitemap</div>
        <div className='footer-icon-net'>
          <div className='footer-icon-netlogo'><TwitterLogo size={25} color="#1DA1F2" /></div>
          <div className='footer-icon-netlogo'><FacebookLogo size={25} color="#4267B2" /></div>
          <div className='footer-icon-netlogo'><LinkedinLogo size={25} color="#0077B5" /></div>
          <div className='footer-icon-netlogo'><YoutubeLogo size={25} color="#FF0000" /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;