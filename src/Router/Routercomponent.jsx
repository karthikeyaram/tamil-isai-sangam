import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Common/Navbar'
import Home from '../Component/Home/Home'
import DeivigaArulalarkal from '../Component/Gallery/DeivigaArulalarkal'

const Routercomponent = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/DeivigaArulalarkal' element={<DeivigaArulalarkal/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routercomponent;
