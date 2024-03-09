import { StarFour } from '@phosphor-icons/react';
import React from 'react';
import './Pay.scss'
const Pay = () => {
    return (
        <div className='pay-wraper'>
            <div className='pay-icon'>
                <StarFour size={22} />
            </div>
            <h4 className='pay-title'>Thêm sự kiện</h4>
        </div>
    );
};

export default Pay;