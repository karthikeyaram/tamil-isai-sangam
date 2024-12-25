import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import evedata from '../Data/Data.json'
import { FaPlayCircle } from "react-icons/fa";

const Eveningcollege = () => {
    const { language } = useSelector((state) => state.language);
    const evecolleged = evedata[language]?.evecollege || [];
    const note = evedata[language]?.notes2 || [];


     const [expandedCourse, setExpandedCourse] = useState(null); // State for expanded card
    
      const handleToggle = (index) => {
        setExpandedCourse(expandedCourse === index ? null : index); // Toggle expansion for clicked card
      };
    
  return (
    <>
    <div className="our-cources sub padding-lg">
          <div className="container">
            {evecolleged.map((course, index) => (
              <div key={index}>
                <h3 style={{ textAlign: "center" }}>{course.title}</h3>
                <div className="row">
                  <div
                    className="col-sm-12"
                    style={{ color: "black", textAlign: "center" }}
                  >
                    <h2 style={{ color: "black" }}>
                      <span>{course.title1}</span> {course.title2}
                    </h2>
                  </div>
                </div>
    
                <ul className="row course-list inner">
                  {course.courses.map((item, idx) => (
                    <li key={idx} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="course-card">
                        <figure className="course-image">
                          <img src={item.image} alt={item.title3} />
                          <div className="course-info">
                            <h3 className="course-title">
                              {" "}
                              <span>{item.title3}</span>
                            </h3>
                            <p
                              className="course-description"
                              style={{ fontWeight: "bold" }}
                            ></p>
                            <div className="row">
                            <p className="course-fee">
                              <span>FEES: {item.fee}</span>
                            </p>
                            </div>
                          </div>
                        </figure>
    
                        <div
                          className="course-details"
                          style={{ backgroundColor: "#2ca352" }}
                        >
                          <div className="course-duration">
                            <h4>{item.duration}</h4>
                            <span>{item.course}</span>
                          </div>
                          <div className="play">
                            <FaPlayCircle
                              style={{
                                margin: "0 auto",
                                display: "block",
                                color: "white",
                                fontSize: "30px",
                                transition: "transform 0.3s ease-in-out",
                              }}
                            />
                          </div>
                          <a
                            className="more-info-link"
                            onClick={() => handleToggle(idx)} // Use idx to toggle the specific card
                          >
                            <span className="icon-more-icon"></span> More Info
                          </a>
                        </div>
                        <div
                          className={`more-info-content ${
                            expandedCourse === idx ? "expanded" : ""
                          }`}
                        >
                          <div className="additional-content">
                          {item.description.map((paragraph, idx) => (                    
                            <p key={idx} style={{ color: "black", fontSize: "14px" }}>
                              {paragraph}
                            </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>    
                
              </div>
            ))}
            <div className="row">
              {note.map((item, index) => (
                <div className="containers1" key={index} style={{display:"block"}}>
                  <h1>{item.title}</h1>
                  <div className="col-sm-9" style={{width:"100%"}}>
                    <div className="notes">
                      <div className="point">
                        <p>{item.point}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Eveningcollege
