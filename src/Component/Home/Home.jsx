import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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


  const newsEvents = [
    {
      id: 1,
      image: "images/new-event-img1.jpg",
      title: "We have added new features to Dream Palace",
      date: "14 Feb 2017",
      comments: 24,
    },
    {
      id: 2,
      image: "images/new-event-img2.jpg",
      title: "We have added new features to Dream Palace",
      date: "14 Feb 2017",
      comments: 24,
    },
    {
      id: 3,
      image: "images/new-event-img3.jpg",
      title: "We have added new features to Dream Palace",
      date: "14 Feb 2017",
      comments: 24,
    },
  ];

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
          <li className="col-sm-4 apply-online clearfix equal-hight" style={{height:"194px"}}>
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
              <MdKeyboardArrowRight/>
              </a>
            </div>
          </li>
          <li className="col-sm-4 prospects clearfix equal-hight" style={{height:"194px"}}>
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
                <MdKeyboardArrowRight/>
              </a>
            </div>
          </li>
          <li className="col-sm-4 certification clearfix equal-hight" style={{height:"194px"}}>
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
              <MdKeyboardArrowRight/>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-sm-push-5 left-block">
            <span className="sm-head">the Online Education portal</span>
            <h2>Edumart Online</h2>
            <p>
              Building on Edumart Group’s rich experience with online MBA at
              Edumart University Online! Designing and delivering both graduate
              and post-graduate programs across a variety of disciplines,
              Edumart University Online, offering online MBA has worked upon
              the knowledge-base created by our highly qualified faculties, our
              research, publishing and training experience, to create online
              MBA programs that offer a rich learning experience.
            </p>
            <div className="know-more-wrapper">
              <a href="about.html" className="know-more">
                Know More <span className="icon-more-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-sm-5 col-sm-pull-7">
            <div className="video-block">
              <div id="thumbnail_container">
                <img
                  src="images/about-video.jpg"
                  id="thumbnail"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <a
                href="https://www.youtube.com/watch?v=i11RXCJVEnw"
                className="start-video video"
              >
                <img src="images/play-btn.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="news-events padding-lg">
      <div className="container">
        <h2>
          <span>There are many ways to learn</span> News and events
        </h2>
        <ul className="row cs-style-3">
          {newsEvents.map((event) => (
            <li className="col-sm-4" key={event.id}>
              <div className="inner">
                <figure>
                  <img
                    src={event.image}
                    className="img-responsive"
                    alt="Event"
                  />
                  <figcaption>
                    <div className="cnt-block">
                      <a href="news.html" className="plus-icon">
                        +
                      </a>
                      <h3>{event.title}</h3>
                      <div className="bottom-block clearfix">
                        <div className="date">
                          <div className="icon">
                            <span className="icon-calander-icon"></span>
                          </div>
                          <span>{event.date}</span>
                        </div>
                        <div className="comment">
                          <div className="icon">
                            <span className="icon-chat-icon"></span>
                          </div>
                          <span>{event.comments}</span> comments
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ul>
        <div className="know-more-wrapper">
          <a href="news.html" className="know-more">
            More Post <span className="icon-more-icon"></span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
