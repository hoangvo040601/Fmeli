import { FileText } from '@phosphor-icons/react';
import './SaveButton.scss'
import React from 'react';

const SaveButton = () => {
    return (
        <div className='button-wraper'>
            <FileText className='button-icon' size={15} color={'#fff'} />
            <div className='button-save'>Lưu</div>
        </div>
    );
};

export default SaveButton;