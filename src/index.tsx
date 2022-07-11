import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './main-app/App';
import HomePageLayout from './layouts/home/home-page-layout';
import UserPageLayout from './layouts/user-page/user-page-layout';
import UserPagePosts from './components/user-page/posts/user-posts';
import UserFriends from './components/user-page/friends/user-friends';
import SearchPage from './layouts/search-page/search-page-layout';
import UserAbout from './components/user-page/about/about';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomePageLayout />} />
        <Route path='/user/:UserId' element={<UserPageLayout />}>
            <Route path='/user/:UserId' element={<UserPagePosts />} />
            <Route path='/user/:UserId/friends' element={<UserFriends />} />
            <Route path='/user/:UserId/about' element={<UserAbout />} />
        </Route>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/search/:SearchParams' element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
