import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './main-app/App';
import HomePageLayout from './layouts/home/home-page-layout';
import UserPageLayout from './layouts/user-page/user-page-layout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomePageLayout />} />
        <Route path='/user/:UserId' element={<UserPageLayout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
