import { ArrowsDownUp } from '@phosphor-icons/react';
import './SortButton.scss'
import React from 'react';

const SortButton = () => {
    return (
        <div className='sort-wraper'>
            <ArrowsDownUp className='sort-icon' size={15} color={'#fe7f56'} />
            <div className='sort-save'>A-Z</div>
        </div>
    );
};

export default SortButton;