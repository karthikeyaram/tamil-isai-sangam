import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json'

const IsaiPerairignarkal = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiPerairignarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const images = [
    { src: 'img30.jpg', name: 'Image 1' },
    { src: 'img29 (1).jpg', name: 'Image 2' },
    { src: 'img29 (50).jpg', name: 'Image 3' },
    { src: 'img29 (49).jpg', name: 'Image 4' },
    { src: 'img29 (48).jpg', name: 'Image 5' },
    { src: 'img29 (47).jpg', name: 'Image 6' },
    { src: 'img29 (46).jpg', name: 'Image 7' },
    { src: 'img29 (45).jpg', name: 'Image 8' },
    { src: 'img29 (44).jpg', name: 'Image 9' },
    { src: 'img29 (43).jpg', name: 'Image 10' },
    { src: 'img29 (42).jpg', name: 'Image 11' },
    { src: 'img29 (41).jpg', name: 'Image 12' },
    { src: 'img29 (39).jpg', name: 'Image 13' },
    { src: 'img29 (38).jpg', name: 'Image 14' },
    { src: 'img29 (37).jpg', name: 'Image 15' },
    { src: 'img29 (36).jpg', name: 'Image 16' },
    { src: 'img29 (35).jpg', name: 'Image 17' },
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog4 || []; // Added fallback to prevent undefined errors


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
               {galleryd[0]?.gallery4?.[index]?.title || 'No Title Available'}
             </div>
 
 {/* <div className="overlay" >
               {galleryd.map((item, idx) => (
                 <div key={idx} className="gal">
                   {item.gallery2?.map((img, id) => (
                     <div key={id} className="overlay-text">
                       {img.title}
                     </div>
                   ))}
                 </div>
               ))}
             </div> */}
 
 
             
           </div>
         ))}
       </div>
       
       
       
             {/* <div className="overlay" >
               {galleryd.map((item, idx) => (
                 <div key={idx} className="gal">
                   {item.gallery2?.map((img, id) => (
                     <div key={id} className="overlay-text">
                       {img.title}
                     </div>
                   ))}
                 </div>
               ))}
             </div> */}
 
 
 
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
 
             
             {/* <div style={imageNameStyle}>{image.name}</div> */}
     </div>
   );
 };

export default IsaiPerairignarkal;
