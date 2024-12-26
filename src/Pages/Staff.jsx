import React, { useState, useEffect } from 'react';

function Staff() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'staff-1.jpg',  // Replace with the correct image paths
    'staff-2.jpg',
    'staff-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '80%',
    height: '400px'
  };

  const staffImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0,
    transition: 'opacity 1s ease-in-out' // Smooth fade transition
  };

  const fadeInStyle = {
    opacity: 1
  };

  const fadeOutStyle = {
    opacity: 0
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Staff ${index + 1}`}
            style={{
              ...staffImageStyle,
              ...(currentIndex === index ? fadeInStyle : fadeOutStyle)
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Staff;
