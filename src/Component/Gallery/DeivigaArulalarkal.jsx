import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';

const DeivigaArulalarkal = () => {
  const [activeHeader, setActiveHeader] = useState('DeivigaArulalarkal');
  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.gallery || [];

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
    position: 'relative',
    animation: 'fadeIn 1s ease-in-out', 
  };

  const headerItemStyle = (name) => ({
    fontSize: '18px',
    fontWeight: '600',
    color: activeHeader === name ? '#F39C12' : '#333333', 
    textTransform: 'capitalize', 
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: activeHeader === name ? '0 0 10px rgba(243, 156, 18, 0.6)' : 'none', 
    '&:hover': {
      color: '#F39C12', 
      transform: 'scale(1.1)', 
      boxShadow: '0 0 10px rgba(243, 156, 18, 0.4)', 
    },
  });

  const images = [
    { src: 'img1.jpg' },
    { src: 'img2.jpg' },
    { src: 'img3.jpg'},
    { src: 'img4.jpg' },
    { src: 'img5.jpg'},
    { src: 'img6.jpg'},
    { src: 'img7.jpg'},
    { src: 'img8.jpg'},
    { src: 'img9.jpg' },
    { src: 'img10.jpg' },
    { src: 'img11.jpg' },
    { src: 'img12.jpg' },
    { src: 'img13.jpg' },
    { src: 'img14.jpg' },
    { src: 'img15.jpg' },
    { src: 'img16.jpg' },
    { src: 'img17.jpg' }
  ];

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target]);
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    const imageElements = document.querySelectorAll('.gallery-item');
    imageElements.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const galleryItemStyle = (isVisible, index) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: isVisible ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? index % 2 === 0
        ? 'translateX(0)' 
        : 'translateX(0)' 
      : index % 2 === 0
      ? 'translateX(-100px)'
      : 'translateX(100px)', 
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`, // Sequential delay for each image
  });

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease', 
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  };

  return (
    <div>
      <div style={headerStyle}>
        {headerNames.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            style={headerItemStyle(name)}
            onClick={() => setActiveHeader(name)}
          >
            {name}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h6 style={{ fontSize: '26px', fontWeight: '500', color: '#F39C12', marginBottom: '40px' }}>
          {activeHeader}
        </h6>
      </div>

      <div style={galleryContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={galleryItemStyle(visibleImages.includes(document.querySelector(`.gallery-item:nth-child(${index + 1})`)), index)}
          >
            <img
              src={image.src}
              alt={image.name}
              style={galleryImageStyle}
            />

            {/* Display the first title from galleryd under the image */}
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery1?.[index]?.title || 'No Title Available'}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DeivigaArulalarkal;
