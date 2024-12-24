import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PannIsaiPerarignarkal = () => {
  const [activeHeader, setActiveHeader] = useState('PannIsaiPerarignarkal');

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
  });

  const images = [
    { src: 'img31 (10).jpg', name: 'Image 1' },
    { src: 'img31 (9).jpg', name: 'Image 2' },
    { src: 'img31 (8).jpg', name: 'Image 3' },
    { src: 'img31 (6).jpg', name: 'Image 4' },
    { src: 'img31 (5).jpg', name: 'Image 5' },
    { src: 'img31 (4).jpg', name: 'Image 6' },
    { src: 'img31 (3).jpg', name: 'Image 7' },
    { src: 'img31 (2).jpg', name: 'Image 8' },
    { src: 'img31 (1).jpg', name: 'Image 9' },
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
            <img src={image.src} alt={image.name} style={galleryImageStyle} />
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

export default PannIsaiPerarignarkal;
