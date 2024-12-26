import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import IsaiArulalarkal from '../Component/Gallery/IsaiArulalarkal'
import IsaiKalaivanarkal from '../Component/Gallery/IsaiKalaivanarkal'
import IsaiPerairignarkal from '../Component/Gallery/IsaiPerairignarkal'
import PannIsaiPerarignarkal from '../Component/Gallery/PannIsaiPerarignarkal'
import Media from '../Component/media/Media'
import Navbar from "../Component/Common/Navbar";
import Home from "../Component/Home/Home";
import DeivigaArulalarkal from "../Component/Gallery/DeivigaArulalarkal";
import Footer from "../Component/Common/Footer";
import Tamilisaisangam from "../Pages/Tamilisaisangam";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import History from "../Pages/History";

import Contact from '../Component/Contact'
import Boardtrustees from "../Pages/Boardtrustees";
import Museum from '../Component/Gallery/Museum'
import Library from '../Component/Library'
import Boardpresident from "../Pages/Boardpresident";
import Pannresearch from "../Pages/Pannresearch";
import Awards from "../Pages/Awards";
import Chiefguest from "../Pages/Chiefguest";
import Collegehistory from "../Pages/Collegehistory";
import Formerpincipals from "../Pages/Formerpincipals";
import Daycollege from "../Pages/Daycollege";
import CompetitionForm from '../Component/Home/Competitionform'
import Eveningcollege from '../Pages/Eveningcollege'
import TISGECcourse from '../Pages/TISGECcourse'
import Registrationfom from '../Pages/Registrationfom'
import Equiezregistration from '../Pages/Equiezregistration'
import Staff from '../Pages/Staff'
import Diplomacourse from '../Pages/Diplomacouse'
import Certificatecourse from '../Pages/Certificatecourse'
import Specialcourse from '../Pages/Specialcourse'
import Distanceeducation from '../Pages/Distanceeducation'
import Openeducation from '../Pages/Openeducation'

const Routercomponent = () => {
  return (
    <BrowserRouter>
    
      <MainRoutes />
    </BrowserRouter>
  );
};

const MainRoutes = () => {
  // const location = useLocation();
  // const showNavbarAndFooter = !["/login", "/register"].includes(location.pathname);

  return (
    <>
      {/* {showNavbarAndFooter && <Navbar />}  */}
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/staff' element={<Staff/>}/>
        <Route path="/DeivigaArulalarkal" element={<DeivigaArulalarkal />} />
        <Route path='/IsaiArulalarkal' element={<IsaiArulalarkal/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path="/tamil-isai-sangam" element={<Tamilisaisangam />} />
        <Route path="/register" element={<Register />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/tamil-isai-history" element={<History />} />
        <Route path='/media' element={<Media/>}/>
        <Route path='/museum' element={<Museum/>}/>
        <Route path='/IsaiKalaivanarkal'  element={<IsaiKalaivanarkal/>}/>
        <Route path='/IsaiPerairignarkal' element={<IsaiPerairignarkal/>}/>
        <Route path='/PannIsaiPerarignarkal' element={<PannIsaiPerarignarkal/>}/>
        <Route path='/trustees' element={<Boardtrustees/>}/>
        <Route path='/trustees' element={<Boardtrustees/>}/>
        <Route path='/presidents-and-secretaries' element={<Boardpresident/>}/>
        <Route path='/tamil-pann-research' element={<Pannresearch/>}/>
        <Route path='/awards' element={<Awards/>}/>
        <Route path='/cheif_guest' element={<Chiefguest/>}/>
        <Route path='/tamilisai-college-history' element={<Collegehistory/>}/>
        <Route path='/tamilisai-college-principals' element={<Formerpincipals/>}/>
        <Route path='/tamilisai-day-college' element={<Daycollege/>}/>
        <Route path='/competition-form' element={<CompetitionForm/>}/>
        <Route path='/tamilisai-eve-college' element={<Eveningcollege/>}/>
        <Route path='/TISGEC-course' element={<TISGECcourse/>}/>
        <Route path='/register-form' element={<Registrationfom/>}/>
        <Route path='/equiez-register-form' element={<Equiezregistration/>}/>
        <Route path='/diploma-course' element={<Diplomacourse/>}/>
        <Route path='/cetificate-course' element={<Certificatecourse/>}/>
        <Route path='/special-course' element={<Specialcourse/>}/>
        <Route path='/distance-education' element={<Distanceeducation/>}/>
        <Route path='/open-education' element={<Openeducation/>}/>


        
      
      </Routes>
      
      <Footer/>
      {/* {showNavbarAndFooter && <Footer />}  */}
    </>
  );
};

export default Routercomponent;
