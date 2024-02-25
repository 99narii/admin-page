import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './style.css';
import Header from '../Components/header';
import UserList from './UserList';
import PostList from './PostList';


const Home = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };    

    const sidebarClass = isSidebarVisible ? "sidebar-visible" : "sidebar-disabled";

  return (
    <div>
        <Header toggleSidebar={toggleSidebar} />
    <div id="dashboard">
      <div id="sidebar" className={sidebarClass} >
      <nav>
        <ul>
          <li>
            <Link to="/users">User</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div id="main-content">
      <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
            {/* 추가 라우트 설정 */}
          </Routes>

      </div>
    </div>
    </div>
  );
};

export default Home;