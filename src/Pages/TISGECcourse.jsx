import React from "react";
import { useSelector } from "react-redux";
import jsondata from "../Data/Data.json";
import { useState } from "react";

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
  const tabs = jsondata[language]?.terms || []; // Ensure tabs is not undefined
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || ""); // Default to empty string if tabs[0] is undefined
  const table = jsondata[language]?.tablecontent || [];
  const tabled = jsondata[language]?.tablecontent2 || [];
  const steps = jsondata[language]?.stepses || [];
  const formheadtitle = jsondata[language]?.formhead;

  const formheadArray = Array.isArray(formheadtitle) ? formheadtitle : [];
  

  return (
    <>
      <div className="details-tab">
        <div className="container">
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
          <div className="row">
            <div className="col-sm-12">
              <div
                className="bs-example bs-example-tabs"
                data-example-id="togglable-tabs"
              >
                <ul
                  className="nav nav-tabs course-tab"
                  id="myTabs"
                  role="tablist"
                >
                  {tabs?.length > 0 &&
                    tabs.map((tab) => (
                      <li
                        key={tab?.id} // Add safeguard for undefined tab
                        role="presentation"
                        className={activeTab === tab?.id ? "active" : ""} // Check tab?.id for undefined
                      >
                        <a
                          href={`#${tab?.id}`} // Ensure tab?.id is defined
                          role="tab"
                          id={`${tab?.id}-tab`} // Ensure tab?.id is defined
                          data-toggle="tab"
                          aria-controls={tab?.id} // Ensure tab?.id is defined
                          aria-expanded="true"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab(tab?.id || ""); // Default to empty string if undefined
                          }}
                        >
                          <span className={tab?.iconClass}></span>{" "}
                          {/* Check iconClass */}
                          <div className="block">{tab?.label}</div>{" "}
                          {/* Check label */}
                          {tab?.subLabel}
                        </a>
                      </li>
                    ))}
                </ul>
                <div className="tab-content" id="myTabContent">
                  {tabs?.length > 0 &&
                    tabs.map((tab) => (
                      <div
                        key={tab?.id} // Add safeguard for undefined tab
                        className={`tab-pane fade ${
                          activeTab === tab?.id ? "in active" : ""
                        }`}
                        role="tabpanel"
                        id={tab?.id} // Ensure tab?.id is defined
                        aria-labelledby={`${tab?.id}-tab`} // Ensure tab?.id is defined
                      >
                        <div className="row">
                          {tab?.content?.[0]?.column?.map((col, colIndex) => (
                            <div key={colIndex} className="col-sm-6">
                              <ul className="content">
                                {col?.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    style={{
                                      listStyle: "none",
                                      textAlign: "justify",
                                    }}
                                  >
                                    <h4>{item?.title}</h4>
                                    <p>{item?.description}</p>
                                    {item?.subList && (
                                      <ul>
                                        {item.subList?.map(
                                          (subItem, subIndex) => (
                                            <li key={subIndex}>{subItem}</li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {table?.length > 0 &&
          table.map((content, index) => (
            <div key={index} className="table-container">
              <h3>{content?.title}</h3>
              <h4>{content?.title1}</h4>
              <p style={{ fontWeight: "bold", fontSize: "22px" }}>
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

      <div>
        {tabled?.length > 0 &&
          tabled.map((content, index) => (
            <div key={index} className="table-container">
              <p style={{ fontWeight: "bold", fontSize: "22px" }}>
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
            <h2>
              <span>There are many ways to learn</span>
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
    </>
  );
};

export default TISGECcourse;
