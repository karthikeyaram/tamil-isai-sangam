import React, { useState } from "react";
import logo from "../../Assets/img/logo_new.jpg";
import backgroundImage from "../../Assets/banner/slider_01.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registers from "../../Data/Data.json";

const Register = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regdata = registers[language]?.register || [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    mobileno: "",
    // dob: '',
    // selectedRole: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      selectedRole: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const roles = [
    { id: 1, label: "Student", value: "student" },
    // { id: 's-option', label: 'Admin', value: 'educationalProfessional' },
    // { id: 't-option', label: 'Parent or Other Adult', value: 'parentOrAdult' }
  ];

  return (
    <div className="login-wrapper register">
      <div
        className="inner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat", // Ensures the background doesn't repeat
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center",
        }}
      >
        <div className="register-inner">
          <div className="login-logo">
            <a href="/">
              <img src={logo} className="img-responsive" alt="Logo" />
            </a>
          </div>
          {regdata.map((item, index) => (
            <div  className="register-form">
              <div key={index} className="head-block">
                <h1>{item.title}</h1>
              </div>
              <div className="cnt-block">
                <form onSubmit={handleSubmit} className="form-outer">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2>{item.subtitle}</h2>
                      <ul className="select-opt clearfix">
                        {item.role.map((role) => (
                          <li key={role.id}>
                            <input
                              type="radio"
                              id={role.id}
                              name="selector"
                              value={role.value}
                              checked={formData.selectedRole === role.value}
                              onChange={handleRadioChange}
                            />
                            <label htmlFor={role.id}>{role.label}</label>
                            <div className="check"></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.placeholder.map((field, id) => {
                      const [fieldKey, fieldValue] = Object.entries(field)[0];
                      return (
                        <div key={id} className="col-sm-6">
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
                        </div>
                      );
                    })}
                  </div>
                  <div className="button-outer">
                    <button type="submit" className="btn">
                      {item.title}
                      <span className="icon-more-icon"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
