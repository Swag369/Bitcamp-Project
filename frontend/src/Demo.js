import React, { useContext } from 'react';
import SideBar from './Components/SideBar.js';
import './Demo.css';
import { UserContext } from './Context/UserContext.js';

const Demo = () => {
    const { loggedIn } = useContext(UserContext);

    return (
        <div className='demo'>
            <SideBar />
            <h1 id='demo-title'>{loggedIn ? "Hello User" : "Demo"}</h1>
        </div>
    );
}

export default Demo;