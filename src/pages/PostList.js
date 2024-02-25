import React from 'react';
import './style.css';

const PostList = () => {
  const posts = [
    { id: 1, user: '유저1', title: '첫 번째 post.' },
    { id: 2, user: '유저2', title: '두 번째 post.' },
    { id: 3, user: '유저3', title: '세 번째 post.' },
    { id: 4, user: '유저4', title: '네 번째 post.' },
    { id: 5, user: '유저5', title: '다섯 번째 post.' },
    { id: 6, user: '유저6', title: '여섯 번째 post.' },
    { id: 7, user: '유저7', title: '일곱 번째 post.' },
    { id: 8, user: '유저8', title: '여덟 번째 post.' },

  ];

  return (
    <div className="post-list-container">
      <ul className="post-list">
      <li className="post-item-header">
          <span className="header-checkbox">            
          <input type="checkbox" className="user-checkbox"/>
            </span>
          <span className="header-id">ID</span>
          <span className="header-user">사용자</span>
          <span className="header-title">제목</span>
        </li>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <input type="checkbox" className="user-checkbox"/>
            <span className="post-id">{post.id}</span>
            <span className="post-user">{post.user}</span>
            <span className="post-title">{post.title}</span>
            <button className="post-edit-btn">EDIT</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;