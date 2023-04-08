import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <Option name='name1' />
            <Option name='name2' />
            <Option name='name3' />
        </div>
    );
}

const Option = ( name ) => {
    return (
        <div>
            <Link to={'/' + name}>name</Link>
        </div>
    )
}

export default SideBar;