import React from "react";
import { useSelector } from "react-redux";
import forms from "../Data/Data.json";

const RegistrationForm = () => {
  console.log("data", forms);
  const { language } = useSelector((state) => state.language);
  const formheadtitle = forms[language]?.formhead;

  console.log("formheadtitle:", formheadtitle);

  const formData = forms[language]?.form[0] || {};
  const formheadArray = Array.isArray(formheadtitle) ? formheadtitle : [];

  return (
    <div className="generic-wrapper">
      <div className="container1">
        <div className="row padding-lg">
          <div className="col-sm-12 head-block">
            <div className="row">
              {formheadArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-sm-12 head-block"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img
                        src={item.img2}
                        alt=""
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "contain",
                          backgroundColor: "red",
                        }}
                      />
                    </div>

                    <div style={{ flex: 2, textAlign: "center" }}>
                      <h3 style={{ marginBottom: "10px", color: "#0282c2" }}>
                        {item.title}
                      </h3>
                      <h6 style={{ marginTop: "10px" }}>{item.subtitle}</h6>
                      <p>{item.no}</p>
                      <h6>{item.subtitle2}</h6>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        src={item.img2}
                        alt=""
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-12 head-block">
            <h3>{formData.title}</h3>
            <p>{formData.description}</p>
          </div>
          <div className="col-sm-12">
            <form action="#" method="get" className="form-outer">
              <div className="row">
                {formData.fields?.map((field, index) => (
                  <div key={index} className={`col-sm-${field.col}`}>
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={field.className || ""}
                      style={{ color: "black", fontSize: "14px" }}
                    />
                  </div>
                ))}
              </div>
              <div className="row">
                {formData.dates?.map((dateField, index) => (
                  <div key={index} className="col-sm-6">
                    <label
                      style={{ textTransform: "uppercase", color: "#909191" }}
                    >
                      {dateField.name}
                    </label>
                    <input
                      type={dateField.type}
                      placeholder={dateField.placeholder}
                      className="datepicker"
                    />
                  </div>
                ))}
              </div>
              <div className="row">
                {formData.radios?.map((radioGroup, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="col-left">
                      <h2 style={{ color: "#333" }}>{radioGroup.title}</h2>
                      <ul className="select-opt clearfix">
                        {radioGroup.options?.map((radio, idx) => (
                          <li key={idx}>
                            <input
                              id={radio.id}
                              name={radioGroup.title}
                              type="radio"
                            />
                            <label htmlFor={radio.id} style={{ color: "#333" }}>
                              {radio.label}
                            </label>
                            <div className="check"></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                {formData.Fee?.map((fees, index) => (
                  <div key={index} className="col-sm-6">
                    <label
                      style={{ textTransform: "uppercase", color: "#333" }}
                    >
                      {fees.title}
                    </label>
                  </div>
                ))}
              </div>
              <div className="row">
                {formData.declarations?.map((dec, index) => (
                  <div key={index} className="col-sm-12">
                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "15px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        marginBottom: "15px",
                      }}
                    >
                      <h5
                        style={{
                          textTransform: "uppercase",
                          color: "#333",
                          marginBottom: "10px",
                        }}
                      >
                        {dec.title}
                      </h5>
                      <p style={{ margin: "0", textAlign: "justify" }}>
                        {dec.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {formData.accept?.map((accepts, index) => (
                  <div key={index} className="col-sm-12">
                    <div className="col-left">
                      <h2 style={{ color: "#333" }}>{accepts.title}</h2>
                      <ul className="select-opt clearfix">
                        <li>
                          <input
                            id={accepts.id}
                            name={accepts.title}
                            type="radio"
                          />
                          <label htmlFor={accepts.id} style={{ color: "#333" }}>
                            {accepts.label}
                          </label>
                          <div className="check"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="button-outer">
                <button className="btn">
                  Get Started Now <span className="icon-more-icon"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
