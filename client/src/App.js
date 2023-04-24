import React from 'react';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/LogIn';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <div className="container h-screen mx-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
