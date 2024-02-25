import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import UserList from './pages/UserList';
import PostList from './pages/PostList';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute'; 

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/users" element={<UserList />} />
              <Route path="/posts" element={<PostList />} />
            </Route>
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
