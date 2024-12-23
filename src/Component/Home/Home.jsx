import React, { useState, useEffect } from "react";

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
      Image: require("../../Assets/banner/slider_02.jpg"),
    },
    {
      title: "Build Your",
      spatitile: "Dream Career",
      description: "Empower your future with our world-class education.",
      buttonLink: "career.html",
      Image: require("../../Assets/banner/slider_03.jpg"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "350px", 
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.Image})`,
              backgroundSize: "contain", 
              backgroundRepeat: "no-repeat", 
              backgroundPosition: "top", 
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          >
            {/* <div
              style={{
                position: "absolute",
                bottom: "20%",
                left: "10%",
                color: "#fff",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a
                href={slide.buttonLink}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Know More
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
