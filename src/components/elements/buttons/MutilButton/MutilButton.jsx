import {Shuffle } from '@phosphor-icons/react';
import './MutilButton.scss'
import React from 'react';

const MutilButton = () => {
    return (
        <div className='mutil-wraper'>
            <Shuffle className='mutil-icon' size={15} color={'#fe7f56'} />
            <div className='mutil-save'>Trộn</div>
        </div>
    );
};

export default MutilButton;