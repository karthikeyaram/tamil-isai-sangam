import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const DeivigaArulalarkal = () => {

  const [activeHeader, setActiveHeader] = useState('DeivigaArulalarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
  };

  const headerItemStyle = (name) => ({
    fontSize: '15px',
    fontWeight: '100',
    color: activeHeader === name ? '#F39C12' : '#333',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    // backgroundColor: activeHeader === name ? '#333' : 'transparent',
  });

  const images = [
    { src: 'img1.jpg', name: 'Image 1' },
    { src: 'img2.jpg', name: 'Image 2' },
    { src: 'img3.jpg', name: 'Image 3' },
    { src: 'img4.jpg', name: 'Image 4' },
    { src: 'img5.jpg', name: 'Image 5' },
    { src: 'img6.jpg', name: 'Image 6' },
    { src: 'img7.jpg', name: 'Image 7' },
    { src: 'img8.jpg', name: 'Image 8' },
    { src: 'img9.jpg', name: 'Image 9' },
    { src: 'img10.jpg', name: 'Image 10' },
    { src: 'img11.jpg', name: 'Image 11' },
    { src: 'img12.jpg', name: 'Image 12' },
    { src: 'img13.jpg', name: 'Image 13' },
    { src: 'img14.jpg', name: 'Image 14' },
    { src: 'img15.jpg', name: 'Image 15' },
    { src: 'img16.jpg', name: 'Image 16' },
    { src: 'img17.jpg', name: 'Image 17' },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const galleryItemStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  };

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayTextStyle = {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: '700',
    color: '#4A90E2',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#F4F4F4',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
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
            style={galleryItemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img
              src={image.src}
              alt={image.name}
              style={galleryImageStyle}
            />
            <div className="overlay" style={overlayStyle}>
              <div className="overlay-text" style={overlayTextStyle}>
                {image.name}
              </div>
            </div>
            <div style={imageNameStyle}>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeivigaArulalarkal;
