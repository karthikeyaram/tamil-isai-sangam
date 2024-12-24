import React, { useState } from "react";
import { useSelector } from "react-redux";
import coursedata from "../Data/Data.json";
import { FaPlayCircle } from "react-icons/fa";

const Daycollege = () => {
  const { language } = useSelector((state) => state.language);
  const principal = coursedata[language]?.Daycollege || [];
  const note = coursedata[language]?.notes || [];

  const [expandedCourse, setExpandedCourse] = useState(null); // State for expanded card

  const handleToggle = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index); // Toggle expansion for clicked card
  };

  return (
    <div className="our-cources sub padding-lg">
      <div className="container">
        {principal.map((course, index) => (
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
                        <p className="course-fee">
                          <span>FEES: {item.fee}</span>
                        </p>
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
                        <p style={{ color: "black", fontSize: "14px" }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="row">
              <div className="col-sm-12">
                <nav aria-label="Page navigation" className="text-center">
                  <ul className="pagination">
                    <li>
                      <a
                        href="#"
                        aria-label="Previous"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ backgroundColor: "#252323", color: "white" }}
                        >
                          <i
                            className="fa fa-angle-left"
                            aria-hidden="true"
                          ></i>{" "}
                          Back
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-label="Next"
                        style={{ backgroundColor: "#252323", color: "white" }}
                      >
                        <span aria-hidden="true">
                          Next{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ))}
        <div className="row">
          {note.map((item, index) => (
            <div className="containers1" key={index} style={{display:"block"}}>
              <h1>{item.title}</h1>
              <div className="col-sm-9">
                <div className="notes">
                  <div className="point">
                    <p>{item.point}</p>
                    <p>{item.point1}</p>
                    <p>{item.point2}</p>
                    <p>{item.point3}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daycollege;
