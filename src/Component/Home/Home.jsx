import React, { useState } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Explore the World of",
      spatitile: " Our Graduates",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonLink: "about.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    }
    // Additional slides can be added here
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="banner-outer">
        <div className="bx-wrapper" style={{ maxWidth: "100%" }}>
          <div
            className="bx-viewport"
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              height: "588px", // Ensure the container has height
            }}
          >
            <div
              className="banner-slider"
              style={{ width: "auto", position: "relative" }}
            >
              <div
                className="slider"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    className="slide"
                    key={index}
                    style={{
                      backgroundImage: `url(${slide.Image})`,
                      backgroundSize: "cover", // Ensure image covers the area
                      backgroundPosition: "center center",
                      height: "100%", // Ensure slide takes up full height of the container
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center", // Center content vertically and horizontally
                    }}
                  >
                    <div className="container">
                      <div className="content animated fadeInRight">
                        <div className="fl-right">
                          <h1 className="animated fadeInRight">{slide.title}</h1>
                        </div>
                        <span className="animated fadeInRight">{slide.spatitile}</span>
                        <p className="animated fadeInRight">{slide.description}</p>
                        <a href={slide.buttonLink} className="btn animated fadeInRight">
                          Know More <span className="icon-more-icon"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Home;
