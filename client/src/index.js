import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import City from './pages/Dashboard/City';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<AuthLayout/>}>
          <Route to='/login' element={<LoginPage />} />
          <Route to='/register' element={<RegisterPage />} />
        </Route>
        <Route element={<AppLayout/>}>
          <Route to='/dashboard/city' element={<City/>} />
          <Route to='/default' element={<DefaultPage />} />
          <Route to='/profile' element={<ProfilePage />} />
        </Route>
        <Route element={<DefaultLayout/>}>
          <Route to='/' element={<HomePage />} />
        </Route>

      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
