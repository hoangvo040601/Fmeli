import { Steps } from 'antd';
import React from 'react';
import './EventStept.scss'
const EventStept = (props) => {
  
  const {currentStept} = props;
  return (

    <div className='rotation-wraper'>
      <div className='rotation-process'>
                <Steps
                    current={currentStept}
                    items={[
                        {
                            title: "Khởi tạo sự kiện",
                        },
                        {
                            title: "Thanh toán",
                            // subTitle: "Left 00:00:08",
                        }
                    ]}
                />

            </div>
    </div>
  );
};

export default EventStept;