import React, { useState } from "react";
import logo from "../../Assets/img/logo_new.jpg";
import backgroundImage from "../../Assets/banner/slider_01.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logindata from "../../Data/Data.json";

const Login = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logdata = logindata[language]?.login || [];

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
    console.log(formData);
    // Handle login logic
  };

  const socialLinks = [
    { name: "facebook", icon: "fa-facebook", url: "#" },
    { name: "twitter", icon: "fa-twitter", url: "#" },
    { name: "linkedin", icon: "fa-linkedin", url: "#" },
    { name: "google-plus", icon: "fa-google-plus", url: "#" },
    { name: "youtube", icon: "fa-youtube-play", url: "#" },
    { name: "instagram", icon: "fa-instagram", url: "#" },
  ];

  return (
    <div className="login-wrapper">
      <div
        className="inner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat", // Ensures the background doesn't repeat
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center",
        }}
      >
        <div className="login">
          <div className="login-logo">
            <a href="/">
              <img src={logo} className="img-responsive" alt="Logo" />
            </a>
          </div>
          {logdata.map((item, index) => (
            <div className="loginform">
              <div className="head-block">
                <h1>{item.title}</h1>
              </div>
              <div className="cnt-block">
                <form onSubmit={handleSubmit} className="form-outer">
                  {item.placeholder.map((field,id)=>{
                    const [fieldKey, fieldValue] = Object.entries(field)[0];
                    return (
                                <input
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
                            )
                    })}                  
                  <div className="button-outer">
                    <button className="btn" type="submit">
                    {item.title}<span className="icon-more-icon"></span>
                    </button>
                    <div className="or hidden-xs">{item.or}</div>
                    <button className="btn register" type="button">
                    {item.subtitle}<span className="icon-more-icon"></span>
                    </button>
                  </div>
                  <div className="remember">
                    <div className="check">
                      <input type="checkbox" id="rememberMe" />
                      <label htmlFor="rememberMe">{item.option1}</label>
                    </div>
                    <a href="#" className="forgot">
                      <span>?</span>{item.option2}
                    </a>
                  </div>
                </form>
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
  );
};

export default Login;
