import { ArrowClockwise } from '@phosphor-icons/react';
import './ChangeButton.scss'
import React from 'react';

const ChangeButton = () => {
    return (
        <div className='change-wraper'>
            <ArrowClockwise size={15} color={'#fe7f56'}/>
            <div className='change-save'>Sửa</div>
        </div>
    );
};

export default ChangeButton;