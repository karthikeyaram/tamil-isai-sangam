import React from "react";
import { useSelector } from "react-redux";
import jsondata from "../Data/Data.json";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const TISGECcourse = () => {
  const tabss = [
    {
      id: "semester",
      label: "SEMESTER",
      subLabel: "I TO IV",
      iconClass: "icon-semester-icon",
    },
  ];

  const { language } = useSelector((state) => state.language);
  const tabs = jsondata[language]?.terms || [];
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const table = jsondata[language]?.tablecontent || [];
  const tabled = jsondata[language]?.tablecontent2 || [];
  const steps = jsondata[language]?.stepses || [];
  const formheadtitle = jsondata[language]?.formhead;

  const formheadArray = Array.isArray(formheadtitle) ? formheadtitle : [];


  return (
    <>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            <div className="col-sm-12">
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
                        <p style={{ marginTop: "0px" ,textAlign:"center"}}>{item.no}</p>
                        <h6 style={{ marginTop: "0px" }}>{item.subtitle2}</h6>
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
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div
                className="bs-example bs-example-tabs"
                data-example-id="togglable-tabs"
              >
                <div>
                  <h6 style={{textAlign:"start"}}>Terms List</h6>
                  {tabs.length > 0 ? (
                    tabs.map((term, termIndex) => (
                      <div key={termIndex}>
                        {term.content.map((content, contentIndex) => (
                          <div key={contentIndex}>
                            {content.column.map((column, columnIndex) => (
                              <ul key={columnIndex}>
                                {column.map((item, itemIndex) => (
                                <li key={itemIndex} style={{listStyle:"none" ,textAlign:"justify"}}><IoIosArrowDroprightCircle style={{marginBottom:"-3px",color:"#3278BE"}}/>{item.title}</li>
                                ))}
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    <p>No terms available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
       

      <div className="row">
        <div className="col-sm-12">
          {table?.length > 0 &&
            table.map((content, index) => (
              <div key={index} className="table-container">
                <h3>{content?.title}</h3>
                <h4>{content?.title1}</h4>
                <p style={{ fontWeight: "bold", fontSize: "22px",textAlign:"center" }}>
                  {content?.thead}
                </p>
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>{content?.thead1?.name}</th>
                      <th>{content?.thead1?.name1}</th>
                      <th>{content?.thead1?.name2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content?.table?.map((row, rowIndex) => (
                      <tr key={rowIndex} className="table-row">
                        <td>{row?.grade}</td>
                        <td>{row?.amount}</td>
                        <td>{row?.amount2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
        </div>
      </div>

      <div>
        {tabled?.length > 0 &&
          tabled.map((content, index) => (
            <div key={index} className="table-container">
              <p style={{ fontWeight: "bold", fontSize: "22px",textAlign:"center" }}>
                {content?.thead}
              </p>
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>{content?.thead1?.name}</th>
                    <th colSpan="2">
                      <div>{content?.thead1?.title}</div>
                      <hr className="separator" />
                      <div className="sub-header">
                        <span>{content?.thead1?.name1}</span>
                        <span>{content?.thead1?.name2}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content?.table?.map((row, rowIndex) => (
                    <tr key={rowIndex} className="table-row">
                      <td>{row?.grade}</td>
                      <td>{row?.amount}</td>
                      <td>{row?.amount2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
      <div className="how-apply padding-lg">
        <div className="container">
          <div>
            <h2 style={{textAlign:"center"}}>
              <span >There are many ways to learn</span>
              How to Apply
            </h2>
            <ul className="row">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`col-sm-4 ${step.active ? "active" : ""}`}
                >
                  <div className="icon-block">
                    <span className="num">{step.number}</span>
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="button-wrapper">
            <a href="/register-form" className="btn">
              apply now <span className="icon-more-icon"></span>
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default TISGECcourse;
