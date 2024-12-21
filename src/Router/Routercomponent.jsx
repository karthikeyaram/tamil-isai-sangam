import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Common/Navbar'
import Home from '../Component/Home/Home'

const Routercomponent = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'  element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routercomponent;
