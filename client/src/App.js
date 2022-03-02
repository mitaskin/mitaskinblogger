import React from 'react'
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';

const App = () => {
  console.log("Client/src/App.js Çalıştı");

  const [open, setOpen] = useState(false);

  return (
    <>
     <MainLayout/>
         
    </>
  )
}

export default App