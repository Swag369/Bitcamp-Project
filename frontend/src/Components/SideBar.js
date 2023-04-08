import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <Option name='Name1' />
            <Option name='Lorem Ipsum' />
            <Option name='Bitcamp' />
        </div>
    );
}

const Option = ({ name }) => {
    return (
        <div className='option'>
            <p className='option-title'>{name}</p>
        </div>
    )
}

export default SideBar;