import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IsaiArulalarkal = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiArulalarkal');
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
    gap: '30px',
    marginBottom: '40px',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
    position: 'relative',
    animation: 'fadeIn 1s ease-in-out', // Fade-in effect
  };

  const headerItemStyle = (name) => ({
    fontSize: '18px',
    fontWeight: '600',
    color: activeHeader === name ? '#F39C12' : '#333333', // Active link color in golden
    textTransform: 'capitalize', // Keeping text natural without uppercase
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: activeHeader === name ? '0 0 10px rgba(243, 156, 18, 0.6)' : 'none', // Glow effect for active item
    '&:hover': {
      color: '#F39C12', // Highlight text color on hover
      transform: 'scale(1.1)', // Slight zoom effect on hover
      boxShadow: '0 0 10px rgba(243, 156, 18, 0.4)', // Subtle glow on hover
    },
  });

  const images = [
    { src: 'img18.jpg', name: 'Image 18' },
    { src: 'img19.jpg', name: 'Image 19' },
    { src: 'img20.jpg', name: 'Image 20' },
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
        threshold: 0.2, // Make the image visible when it is 20% in view
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
        ? 'translateX(0)' // Slide from left for even-index images
        : 'translateX(0)' // Slide from right for odd-index images
      : index % 2 === 0
      ? 'translateX(-100px)' // Slide in from left
      : 'translateX(100px)', // Slide in from right
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`, // Sequential delay for each image
  });

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease', // Smooth transform on hover
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
            className="gallery-item"
            style={galleryItemStyle(visibleImages.includes(document.querySelector(`.gallery-item:nth-child(${index + 1})`)), index)}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'; // Zoom in effect on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)'; // Reset scale on mouse leave
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

export default IsaiArulalarkal;
