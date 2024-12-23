import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Component/Common/Navbar'
import Home from '../Component/Home/Home'
import DeivigaArulalarkal from '../Component/Gallery/DeivigaArulalarkal'
import Library from '../Component/Library'
import IsaiArulalarkal from '../Component/Gallery/IsaiArulalarkal'
import IsaiKalaivanarkal from '../Component/Gallery/IsaiKalaivanarkal'
import IsaiPerairignarkal from '../Component/Gallery/IsaiPerairignarkal'
import PannIsaiPerarignarkal from '../Component/Gallery/PannIsaiPerarignarkal'
import Media from '../Component/media/Media'

const Routercomponent = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/DeivigaArulalarkal' element={<DeivigaArulalarkal/>}/>
        <Route path='/IsaiArulalarkal' element={<IsaiArulalarkal/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/IsaiKalaivanarkal'  element={<IsaiKalaivanarkal/>}/>
        <Route path='/IsaiPerairignarkal' element={<IsaiPerairignarkal/>}/>
        <Route path='/PannIsaiPerarignarkal' element={<PannIsaiPerarignarkal/>}/>
  
      
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routercomponent;
