import React, { useState } from 'react';
import { Alarm, BagSimple, Brain, CaretDown, ChartBar, ClipboardText, Confetti, GameController, Gift, Layout, Percent, Phone, Popcorn, Sword } from "@phosphor-icons/react";
import "./Sidebar.scss"


const Sidebar = (props) => {
  const { setOpenContent, setOpenRotation, setOpenPay, setTitleBack, openContent, openRotation, openPay } = props
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpenSub, setIsSubMenuOpenSub] = useState(false);


  // const handleAction=(action) =>{
  //   switch(action) {
  //     case 'TẠO SỰ KIỆN':
  //       console.log('Bắt đầu hoạt động...');
  //       break;
  //     case 'ĐỔI QUÀ':
  //       console.log('Dừng hoạt động...');
  //       break;
  //     case 'MUA / GIÂHNJ LICENSE':
  //       console.log('Tạm dừng hoạt động...');
  //       break;
  //     default:
  //       console.log('Hành động không hợp lệ');
  //   }
  // }

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const toggleSubMenuSub = () => {
    setIsSubMenuOpenSub(!isSubMenuOpenSub);
    setOpenContent(true)
    setOpenRotation(false)
    setOpenPay(false)
  };

  const handlOpenRotation = () => {
    setOpenContent(false)
    setOpenRotation(true)
    setOpenPay(false)
  }
  const handleTitleBack = (title) => {
    setTitleBack(title)
  }
  return (
    <div className='sidebar-container'>
      <ul>
        <li className='sidebar-line'></li>
        <li className='sidebar-title'>
          <Layout className='sidebar-iconhead' size={22} />
          <span>GIỚI THIỆU</span>
        </li>

        <li className='sidebar-title'>
          <ChartBar className='sidebar-iconhead' size={22} />
          <span>QUẢN LÝ</span>
        </li>

        <li className='sidebar-line'></li>
        <li className='sidebar-title active-sidebar' onClick={toggleSubMenu}>
          <BagSimple className='sidebar-iconhead ' size={22} />
          <span>SỬ DỤNG ĐIỂM</span>
          <CaretDown className="sidebar-arrow" size={22} />
        </li>
        {isSubMenuOpen && (
          <ul className="sub-menu">

            <li className='sidebar-title sidebar-subtitle active-sidebar' onClick={() => { toggleSubMenuSub(); handleTitleBack('TẠO SỰ KIỆN') }}>
              <Confetti className='sidebar-iconhead' size={22} />
              TẠO SỰ KIỆN
              <CaretDown className="sidebar-arrow" size={22} />
            </li>

            {isSubMenuOpenSub && (
              <ul className="sub-menu">
                <li className='sidebar-title sidebar-subtitle sidebar-subtitlesub' onClick={() => { handleTitleBack('ĐIỂM DANH') }}>
                  <ClipboardText className='sidebar-iconhead' size={22} />
                  ĐIỂM DANH 
                </li>
                <li className={ openRotation === true ? `sidebar-title sidebar-subtitle sidebar-subtitlesub active-sidebar`: `sidebar-title sidebar-subtitle sidebar-subtitlesub` } onClick={() => { handlOpenRotation(); handleTitleBack('VÒNG QUAY VÔ CỰC') }}>
                  <Brain className='sidebar-iconhead' size={22} />
                  VÒNG QUAY VÔ CỰC</li>
                <li className='sidebar-title sidebar-subtitle sidebar-subtitlesub' onClick={() => { handleTitleBack('SỨ MỆNH ANH HÙNG') }}>
                  <Sword className='sidebar-iconhead' size={22} />
                  SỨ MỆNH ANH HÙNG</li>
                <li className='sidebar-title sidebar-subtitle  sidebar-subtitlesub' onClick={() => { handleTitleBack('NẠP GIỜ VÀNG') }}>
                  <Alarm className='sidebar-iconhead' size={22} />
                  NẠP GIỜ VÀNG</li>
                <li className='sidebar-title sidebar-subtitle sidebar-subtitlesub' onClick={() => { handleTitleBack('ONLINE PHÒNG MÁY') }}>
                  <GameController className='sidebar-iconhead' size={22} />
                  ONLINE PHÒNG MÁY</li>
                <li className='sidebar-title sidebar-subtitle sidebar-subtitlesub' onClick={() => { handleTitleBack('ĂN UỐNG') }}>
                  <Popcorn className='sidebar-iconhead' size={22} />
                  ĂN UỐNG</li>
              </ul>
            )}

            <li className='sidebar-title sidebar-subtitle'>
              <Percent className='sidebar-iconhead' size={22} />
              MUA / GIA HẠN LICENSE</li>
            <li className='sidebar-title sidebar-subtitle'>
              <Gift className='sidebar-iconhead' size={22} />
              ĐỔI QUÀ</li>
          </ul>
        )}

        <li className='sidebar-title'>
          <Phone className='sidebar-iconhead' size={22} />
          <span>LIÊN HỆ</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;