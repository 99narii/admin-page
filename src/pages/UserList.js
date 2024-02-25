import React from 'react';

const UserList = () => {
  // 임시 사용자 데이터
  const users = [
    { id: 1, name: '유저1', email: 'user1@google.com' },
    { id: 2, name: '유저2', email: 'user2@google.com' },
    { id: 3, name: '유저3', email: 'user3@google.com' },
    { id: 4, name: '유저4', email: 'user4@google.com' },
    { id: 5, name: '유저5', email: 'user5@google.com' },
    { id: 6, name: '유저6', email: 'user6@google.com' },
    { id: 7, name: '유저7', email: 'user7@google.com' },
    { id: 8, name: '유저8', email: 'user8@google.com' },
  ];

  return (
    <div className="user-list-container">
      <ul className="user-list">
      <li className="post-item-header">
          <span className="header-checkbox">            
          <input type="checkbox" className="user-checkbox"/>
            </span>
          <span className="header-id">ID</span>
          <span className="header-user">사용자</span>
          <span className="header-title">Email</span>
        </li>
        {users.map(user => (
          <li key={user.id} className="post-item">
            <input type="checkbox" className="post-checkbox"/>
            <span className="user-id">{user.id}</span>
            <span className="user-user">{user.name}</span>
            <span className="user-email">{user.email}</span>
            <button className="user-edit-btn">EDIT</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;