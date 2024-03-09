import { ArrowClockwise, StarFour } from '@phosphor-icons/react';
import React from 'react';
import './Cancel.scss'
const Cancel = () => {
    return (
        <div className='cancel-wraper'>
            <div className='cancel-icon'>
                <ArrowClockwise size={22} color={"#fe7f56"}/>
            </div>
            <h4 className='cancel-title'>Huỷ</h4>
        </div>
    );
};

export default Cancel;