import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import homeData from "../../Data/Data.json";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Explore the World of",
      spatitile: "Our Graduates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonLink: "about.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    },
    {
      title: "Join the Journey of",
      spatitile: "Innovation",
      description:
        "Experience the pinnacle of technology and creativity with us.",
      buttonLink: "services.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    },
    {
      title: "Build Your",
      spatitile: "Dream Career",
      description: "Empower your future with our world-class education.",
      buttonLink: "career.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    },
  ];

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const margazhiSpecial = homeData[language]?.home[0]?.margazhispecial || [];

  return (
    <>
      <div className="banner-outer">
        <div className="bx-wrapper">
          <div className="bx-viewport">
            <div
              className="banner-slider"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{
                    backgroundImage: `url(${slide.Image})`,
                  }}
                >
                  <div className="content">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <a href={slide.buttonLink} className="btn">
                      Know More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Left and Right Carousels */}
        <div className="carousel-left">
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
        </div>
        <div className="carousel-right">
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="about">
        <div className="container1">
          <ul className="row our-links">
            <li
              className="col-sm-4 apply-online clearfix equal-hight"
              style={{ height: "194px" }}
            >
              <div className="icon">
                <img
                  src="images/apply-online-ico.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="detail">
                <h3>Apply Online</h3>
                <p>Lorem Ipsum is simply dummy text of the printing...</p>
                <a href="apply-online.html" className="more">
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </li>
            <li
              className="col-sm-4 prospects clearfix equal-hight"
              style={{ height: "194px" }}
            >
              <div className="icon">
                <img
                  src="images/prospects-ico.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="detail">
                <h3>
                  <span>Download</span> Prospects
                </h3>
                <p>Lorem Ipsum is simply dummy text of the printing...</p>
                <a href="#" className="more">
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </li>
            <li
              className="col-sm-4 certification clearfix equal-hight"
              style={{ height: "194px" }}
            >
              <div className="icon">
                <img
                  src="images/certification-ico.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="detail">
                <h3>Certification</h3>
                <p>Lorem Ipsum is simply dummy text of the printing...</p>
                <a href="#" className="more">
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="news-events padding-lg">
        <div className="container1">
          {margazhiSpecial.map((special, index) => (
            <div key={index}>
              <h2>
                <span>{special.title}</span> {special.subtitle}
              </h2>
              <ul className="row cs-style-3">
                {special.card &&
                  special.card.map((card) => (
                    <li
                      key={card.id}
                      className="col-sm-4"
                      style={{ listStyle: "none" }}
                    >
                      <div className="inner">
                        <figure className="card-figure">
                          {/* Image */}
                          <img
                            src={card.image}
                            alt={card.cardtitle}
                            className="card-image"
                            style={{
                              width: "100%",
                              height: "auto", // Maintain aspect ratio
                              borderRadius: "10px",
                              transition: "transform 0.3s ease", // Smooth zoom effect
                            }}
                          />
                          <div
                            className="card"
                            style={{
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              height: "300px", // Fixed height for consistent card height
                              borderRadius: "10px",
                              padding: "15px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              width: "100%",
                            }}
                          >
                            {/* Card Title */}
                            <h5 className="card-title">{card.cardtitle}</h5>
                            {/* Card Content */}
                            <h6
                              className="card-content"
                              style={{ width: "100%" }}
                            >
                              {card.cardcontent}
                            </h6>
                          </div>
                        </figure>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
