import React from 'react'

const Media = () => {
  const videoLinks = [
    'uGI8dFVIw3E',
    'K8FktLJk1vk',
    'BBTcSRHGFZY',
    'TwHGyv4EYp0',
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', fontWeight: '600' }}>YouTube Videos</h1>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',  // Two columns
          gap: '20px',  // Gap between videos
          justifyItems: 'center',
          padding: '0 10px', // Adding some padding for better spacing on small screens
        }}
      >
        {videoLinks.map((videoId, index) => (
          <div 
            key={index} 
            style={{
              width: '100%',
              maxWidth: '450px', // Reduced max width for moderate size
              height: '250px', // Fixed height to balance video size
              borderRadius: '10px', // Rounded corners for a softer look
              overflow: 'hidden', // Ensures the iframe fits properly within the container
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a modern look
            }}
          >
            <iframe
              width="100%"
              height="100%" // Adjusted to fill the container
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
  )
}

export default Media
