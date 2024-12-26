import React from 'react';
import { useSelector } from 'react-redux';

const Media = () => {
  const videoLinks = [
    'uGI8dFVIw3E',
    'K8FktLJk1vk',
    'BBTcSRHGFZY',
    'TwHGyv4EYp0',
  ];

  const { language } = useSelector((state) => state.language); // Accessing the selected language from the state

  // Text content for different languages
  const headingText = language === 'tamil' ? ' ஊடகம் ' : 'Media';

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', fontWeight: '600' }}>
        {headingText} {/* Dynamically rendered heading based on the language */}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid with a minimum width for each column
          gap: '20px',
          justifyItems: 'center',
          padding: '0 10px',
        }}
      >
        {videoLinks.map((videoId, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              backgroundColor: '#ffffff', // White background for videos
              padding: '10px',
              boxSizing: 'border-box', // Ensures padding does not overflow
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
