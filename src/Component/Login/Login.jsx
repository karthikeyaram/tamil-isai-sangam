import React, { useState } from "react";
import logo from "../../Assets/img/logo_new.jpg";
import backgroundImage from "../../Assets/banner/slider_01.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logindata from "../../Data/Data.json";
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logdata = logindata[language]?.login || [];

  const [isVisible, setIsVisible] = useState(true);

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store login status in localStorage
    localStorage.setItem("isAdmin", "true");
    
    // Navigate to /admin
    navigate("/admin");
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const closeForm = () => {
    setIsVisible(false); 
    navigate("/");
  };

  const socialLinks = [
    { name: "facebook", icon: "fa-facebook", url: "#" },
    { name: "twitter", icon: "fa-twitter", url: "#" },
    { name: "linkedin", icon: "fa-linkedin", url: "#" },
    { name: "google-plus", icon: "fa-google-plus", url: "#" },
    { name: "youtube", icon: "fa-youtube-play", url: "#" },
    { name: "instagram", icon: "fa-instagram", url: "#" },
  ];

  const responseFacebook = (response) => {
    console.log("Facebook login response:", response);
  };

  const responseGoogle = (response) => {
    console.log("Google login response:", response);
  };

  return (
    <>
      {isVisible && (
        <div className="login-wrapper">
          <div
            className="inner"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="login">
              <div className="login-logo">
                <a href="/">
                  <img src={logo} className="img-responsive" alt="Logo" />
                </a>
              </div>
              <button
                className="close-button"
                onClick={closeForm} 
                style={{
                  position: "absolute",
                  top: "120px",
                  right: "430px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              {logdata.map((item, index) => (
                <div className="loginform" key={index}>
                  <div className="head-block">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="cnt-block">
                    <form onSubmit={handleSubmit} className="form-outer">
                      {item.placeholder.map((field, id) => {
                        const [fieldKey, fieldValue] = Object.entries(field)[0];
                        return (
                          <input
                            key={id}
                            name={fieldKey}
                            type={
                              fieldKey === "email"
                                ? "email"
                                : fieldKey === "password"
                                ? "password"
                                : "text"
                            }
                            placeholder={fieldValue}
                            value={formData[fieldKey] || ""}
                            onChange={handleChange}
                          />
                        );
                      })}
                      <div className="button-outer">
                        <button className="btn" type="submit">
                          {item.title}
                          <span className="icon-more-icon"></span>
                        </button>
                        <div className="or hidden-xs">{item.or}</div>
                        <button
                          className="btn register"
                          type="button"
                          onClick={() => navigate("/register")}
                        >
                          {item.subtitle}
                          <span className="icon-more-icon"></span>
                        </button>
                      </div>
                      <div className="remember">
                        <div className="check">
                          <input type="checkbox" id="rememberMe" />
                          <label htmlFor="rememberMe">{item.option1}</label>
                        </div>
                        <a href="#" className="forgot">
                          <span>?</span>
                          {item.option2}
                        </a>
                      </div>
                    </form>
                    {/* Social Login Buttons */}
                    <div className="social-login">
                      <FaGooglePlus 
                        onSuccess={responseGoogle} 
                        onError={() => console.log('Login Failed')}
                        useOneTap
                      />
                      <FaFacebook
                        appId="your-facebook-app-id"
                        fields="name,email,picture"
                        callback={responseFacebook}
                        textButton="Login with Facebook"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="login-footer">
                <ul className="follow-us clearfix">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.url}>
                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
