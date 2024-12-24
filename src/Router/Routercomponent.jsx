import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correctly import useLocation
import Navbar from "../Component/Common/Navbar";
import Home from "../Component/Home/Home";
import DeivigaArulalarkal from "../Component/Gallery/DeivigaArulalarkal";
import Footer from "../Component/Common/Footer";
import Tamilisaisangam from "../Pages/Tamilisaisangam";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import History from "../Pages/History";
import Boardtrustees from "../Pages/Boardtrustees";
import Boardpresident from "../Pages/Boardpresident";
import Pannresearch from "../Pages/Pannresearch";
import Awards from "../Pages/Awards";
import Chiefguest from "../Pages/Chiefguest";
import Collegehistory from "../Pages/Collegehistory";
import Formerpincipals from "../Pages/Formerpincipals";
import Daycollege from "../Pages/Daycollege";

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
        <Route path="/DeivigaArulalarkal" element={<DeivigaArulalarkal />} />
        <Route path="/tamil-isai-sangam" element={<Tamilisaisangam />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tamil-isai-history" element={<History />} />
        <Route path='/trustees' element={<Boardtrustees/>}/>
        <Route path='/presidents-and-secretaries' element={<Boardpresident/>}/>
        <Route path='/tamil-pann-research' element={<Pannresearch/>}/>
        <Route path='/awards' element={<Awards/>}/>
        <Route path='/cheif_guest' element={<Chiefguest/>}/>
        <Route path='/tamilisai-college-history' element={<Collegehistory/>}/>
        <Route path='/tamilisai-college-principals' element={<Formerpincipals/>}/>
        <Route path='/tamilisai-day-college' element={<Daycollege/>}/>


      
      </Routes>
      
      <Footer/>
      {/* {showNavbarAndFooter && <Footer />}  */}
    </>
  );
};

export default Routercomponent;
