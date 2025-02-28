import { useState } from 'react';
import Home from './views/home/home';
import { BrowserRouter, Routes, Route } from "react-router";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* renders into the outlet in <Root> at "/" */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
