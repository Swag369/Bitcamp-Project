import React, { useContext, useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import image from './Assets/login-left-modal.png';
import { UserContext } from './Context/UserContext.js';

import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");

  const navigateToDemo = (event) => {
    navigate('/demo');
    login(username, password);
    event.preventDefault();
  }

  const changeName = (e) => {
    setUsername(e.target.value);
  }

  const changePassword = (e) => {
    setPassWord(e.target.value);
  }

  return (
    <div className = "window-login">
      <div className = "window-main">
        <div className = "overall-modal">
            <div className = "modal-left">
              <div className = "modal-left-top">

                <p className = "text1">Lorem Ipsum.</p>

              </div>

              <div className = "modal-left-bottom">
                <img className = "image1" src={image} alt="" />
              </div>

            </div>
            <div className = "modal-right">
              <p className = "text2">Sign In</p>

              <form className = "sign-up-form" onSubmit={(event) => navigateToDemo(event)}>

                <label className = "input-label" for="username">Username</label>
                <input className = "input-field" type="text" id="username" onChange={(e) => changeName(e)} 
                placeholder="Enter full name"/>

                <label className = "input-label" for="password">Password</label>
                <input className = "input-field" type="password" id="password" onChange={(e) => changePassword(e)}
                placeholder = "Enter password"/>

                <input className = "input-button" type="submit" value="Sign In"/>
              </form>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login