import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";


function Header({ toggleSidebar }) {
    const location = useLocation();
    let title='';

    switch(location.pathname) {
        case '/login':
          title = 'Login';
          break;
        case '/users':
          title = 'User';
          break;
        case '/posts':
          title = 'Post';
          break;
        default:
          title = 'admin';
      }
    
  return (
    <div className="header">
        <div className="right-header">        
            <FontAwesomeIcon className='barIcon' icon={faBars} onClick={toggleSidebar}/>
            <span>{title}</span>
        </div>
        <FontAwesomeIcon icon={faUser} >
        </FontAwesomeIcon>
    </div>
  );
}

export default Header;
