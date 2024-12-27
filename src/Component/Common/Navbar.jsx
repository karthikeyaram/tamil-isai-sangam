import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../Redux/Slice/LanguageSlice";
import { useNavigate } from "react-router-dom";
import menuData from "../../Data/Data.json";
import "./Navbar.css";
import "../../Assets/css/Custom.css";
import logo from "../../Assets/img/logo_new.jpg";
import { IoIosPlayCircle } from "react-icons/io";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram, FaGooglePlus } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = menuData[language].menu;

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage !== language) {
      dispatch(toggleLanguage());
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-top">
        <div className="container clearfix">
          <ul className="follow-us hidden-xs">
            
            <li>
              <Link href="https://www.facebook.com/people/Tamil-Isai-Kalloori-Tamil-Isai-Sangam/100064832676981/"><FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCc52PkQqepI__b2vjg-dOkQ"><FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/tamil_isai_kalloori?igshid=rzk92bvhobqq"><FaSquareInstagram />
              </Link>
            </li>
          </ul>

          <div className="right-block clearfix">
            <ul className="top-nav hidden-xs">
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="#">Apply Online</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="faq1.html">FAQs</a>
              </li>
            </ul>
            <div className="lang-wrapper">
              <div className="select-lang2">
                <select className="custom_select" defaultValue="en" value={language}
                  onChange={handleLanguageChange}>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container header-middle">
        <div className="row">
          <span className="col-xs-6 col-sm-3">
            <a href="/">
              <img src={logo} className="img-responsive" alt="Edumart Logo" />
            </a>
          </span>
          <div className="col-xs-6 col-sm-3"></div>
          <div className="col-xs-6 col-sm-9">
            <div className="contact clearfix">
              <ul className="hidden-xs">
                <li>
                  <span>Email</span>{" "}
                  <a href="mailto:info@edumart.org">
                    {" "}
                    tamilisaisangam@yahoo.in
                  </a>
                  <br />
                  <a href="mailto:info@edumart.org">
                    tamilisaikalloori@yahoo.in
                  </a>
                </li>
                <li>
                  <span>Toll Free</span>+91 44 2534 1958 / 2955 0107 <br />
                  +91 94449 25880 / 92822 35964
                </li>
              </ul>
              <a href="/login" className="login">
                Student Login<span className="icon-more-icon"> <IoIosPlayCircle /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button
              aria-controls="navbar"
              aria-expanded={isMenuOpen}
              className={`navbar-toggle ${isMenuOpen ? "open" : "collapsed"}`}
              type="button"
              onClick={toggleMenu}
            >
              <IoReorderThreeOutline style={{ width: "35px", height: "35px" }} />
            </button>
          </div>
          <div className={`navbar-collapse ${isMenuOpen ? "show" : "hide"}`}>
            <nav className="navbar">
              <ul className="nav navbar-nav">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className="dropdown"
                    onMouseEnter={(e) => e.currentTarget.classList.add("open")}
                    onMouseLeave={(e) => e.currentTarget.classList.remove("open")}
                  >
                    <a href="#" onClick={() => navigate(item.path)}>
                      {item.navtitle}
                      
                    </a>
                    {item.details && (
                      <ul className="dropdown-menu">
                        {item.details.map((detail, subIndex) => (
                          <li
                            key={subIndex}
                            className="submenu-item dropdown"
                            onMouseEnter={(e) => e.currentTarget.classList.add("open")}
                            onMouseLeave={(e) =>
                              e.currentTarget.classList.remove("open")
                            }
                          >
                            <a href="#" onClick={() => navigate(detail.path)}>
                              {detail.subtitle}
                            </a>
                            {detail.childsubtitle && (
                              <ul className="dropdown-menu">
                                {detail.childsubtitle.map((child, childIndex) => (
                                  <li key={childIndex}>
                                    <a
                                      href="#"
                                      onClick={() => navigate(child.path)}
                                    >
                                      {child.description}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
