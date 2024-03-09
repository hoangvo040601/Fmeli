import { ArrowRight } from '@phosphor-icons/react';
import React from 'react';
import './BackPage.scss'
const BackPage = (props) => {
    const {titleBack} = props;
    return (
        <div className='backpage-container'>
            <div className='backpage-header'>
                <div className='backpage-back'><ArrowRight size={32} /></div>
                <h1 className='backpage-title'>{titleBack}</h1>
            </div>
        </div>
    );
};

export default BackPage;