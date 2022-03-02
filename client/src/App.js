import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import AboutLayout from './layouts/AboutLayout';
import ContactLayout from './layouts/ContactLayout';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  console.log("Client/src/App.js Çalıştı");

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/About' element={<AboutLayout />} />
          <Route path='/Contact' element={<ContactLayout />} />
          <Route
            path="*"
            element={
              <p>404 - Burada Hiç birşey Yok !</p>
            }
          />
        </Routes>
      </BrowserRouter>


      <Footer />

    </>
  )
}

export default App