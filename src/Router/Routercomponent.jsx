import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Common/Navbar'
import Home from '../Component/Home/Home'
import DeivigaArulalarkal from '../Component/Gallery/DeivigaArulalarkal'
import Library from '../Component/Library'

const Routercomponent = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/DeivigaArulalarkal' element={<DeivigaArulalarkal/>}/>
        <Route path='/library' element={<Library/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routercomponent;
