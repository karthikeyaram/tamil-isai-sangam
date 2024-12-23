import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import histroydata from "../Data/Data.json";

const History = () => {
    const { language } = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const head = histroydata[language]?.history || [];
    const headcontent = histroydata[language]?.historys || [];
  
    useEffect(() => {
      const handleScroll = () => {
        const revealElement = document.querySelectorAll(".reveal");
        revealElement.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add("visible");
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <>
        <div className="about inner padding-lg">
          <div className="container1">
            <div className="row">
              {head.map((item, index) => (
                <div className="col-md-12" key={index}>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="video-block">
                        <img
                          src={item.head1.thumbnail}
                          alt="Video Thumbnail"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <h2>{item.content.title}</h2>
                      {item.content.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about inner padding-lg">
          <div className="container1">
            <div className="row">
              {headcontent.map((item, index) => (
                <div className="col-md-12" key={index}>
                  <div className="row">
                    {/* Content Paragraph Block */}
                    <div className="col-md-7 left-block">
                      {item.content.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
  
                    {/* Image Block with Animation */}
                    <div className="col-md-5 about-right">
                      <div className="video-block">
                        <img
                          src={item.head2.thumbnail}
                          className="img-responsive animate__animated animate__zoomIn"
                          alt="Who we are"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default History
