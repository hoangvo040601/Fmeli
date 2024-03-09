import React, { useState } from 'react';
import Sidebar from './sidebar/SideBar';
import "./Body.scss"
import BackPage from '../../elements/buttons/BackPage/BackPage';
import EventStept from './content/eventStept/EventStept';
import EventContent from './content/eventContent/EventContent';
import EventRotation from './content/eventRotation/EventRotation';
import EventPay from './content/eventPay/Eventpay';
import Rotation from '../../elements/buttons/Rotation/Rotation';

const Body = () => {
  const [openContent, setOpenContent] = useState(true)
  const [openPay, setOpenPay] = useState(false)
  const [openRotation, setOpenRotation] = useState(false)
  const [currentStept, setCurrentStept] = useState(0)
  const [titleBack, setTitleBack] = useState('TẠO SỰ KIỆN')

  return (
    <div className='body-container'>
      <Sidebar
        setOpenContent={setOpenContent}
        openContent={openContent}
        setOpenRotation={setOpenRotation}
        openRotation={openRotation}
        setOpenPay={setOpenPay}
        openPay={openPay}
        setTitleBack={setTitleBack}
      />
      <div className='event-container'>
        <BackPage titleBack={titleBack} />
        <EventContent
          openContent={openContent}
          setOpenContent={setOpenContent}
          setOpenRotation={setOpenRotation}
          setTitleBack={setTitleBack}
        />
        <EventRotation
          openRotation={openRotation}
          setOpenRotation={setOpenRotation}
          setOpenPay={setOpenPay}
          setCurrentStept={setCurrentStept}
          setTitleBack={setTitleBack}
          setOpenContent={setOpenContent}
        >
          <EventStept />
        </EventRotation>

        <EventPay
          openPay={openPay}
          setOpenContent={setOpenContent}
          setOpenPay={setOpenPay}
        >
          <EventStept currentStept={currentStept} />
        </EventPay>
      </div>
    </div>
  );
};

export default Body;