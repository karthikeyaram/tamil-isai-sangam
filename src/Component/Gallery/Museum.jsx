import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json'

const Museum = () => {


  const imageSources = [
    "1 (1).jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
  ];

  const { language } = useSelector((state) => state.language);
  const museumd = jsondata[language]?.museums || []; 

  const [shuffledImages, setShuffledImages] = useState(imageSources);

  const shuffleImages = () => {
    const shuffled = [...shuffledImages];
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    const firstImage = shuffled.shift();
    shuffled.splice(randomIndex, 0, firstImage);
    setShuffledImages(shuffled);
  };

  useEffect(() => {
    const interval = setInterval(shuffleImages, 1500);
    return () => clearInterval(interval);
  }, [shuffledImages]);

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "2rem" }}>
      <header
        style={{
          background: "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)",
          color: "#ffffff",
          textAlign: "center",
          padding: "2rem 1rem",
          marginBottom: "1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "0.05em" }}>
          Tamil Music Library
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem", fontWeight: "300" }}>
          Preserving the rich heritage of Tamil music
        </p>
      </header>

      <main style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            flex: "1 1 45%",
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
             </h2>
             <div>
    <div>
      {museumd.map((museum, index) => (
        <div key={index} style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '600' }}>Museum Information</h2>

          {/* Location */}
          <div>
            <strong>{museum.membership_details.location.label}: </strong>
            <span>{museum.membership_details.location.value}</span>
          </div>

          {/* Visiting Hours */}
          <div>
            <strong>{museum.membership_details.visiting_hours.label}: </strong>
            <span>{museum.membership_details.visiting_hours.value}</span>
          </div>

          {/* Membership Fee */}
          <div>
            <strong>{museum.membership_details.membership_fee.label}: </strong>
            <span>{museum.membership_details.membership_fee.value}</span>
          </div>

          {/* Free Entry */}
          <div>
            <strong>{museum.membership_details.free_entry.label}: </strong>
            <span>{museum.membership_details.free_entry.value}</span>
          </div>

          {/* Foreign Nationals */}
          <div>
            <strong>{museum.membership_details.foreign_nationals.label}: </strong>
            <span>{museum.membership_details.foreign_nationals.value}</span>
          </div>

          {/* Educational Institutions */}
          <div>
            <strong>{museum.membership_details.educational_institutions.label}: </strong>
            <span>{museum.membership_details.educational_institutions.value}</span>
          </div>

          {/* Contact */}
          <div>
            <strong>{museum.membership_details.contact.label}: </strong>
            <span>{museum.membership_details.contact.value}</span>
          </div>

          {/* Supervisor */}
          <div>
            <strong>{museum.membership_details.supervisor.label}: </strong>
            <span>{museum.membership_details.supervisor.value}</span>
          </div>

          {/* Phone Supervisor */}
          <div>
            <strong>{museum.membership_details.phone_supervisor.label}: </strong>
            <span>{museum.membership_details.phone_supervisor.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
        </section>

        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            flex: "1 1 45%",
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
            Introduction Video
          </h2>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <video
              src="video.mp4"
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
            Gallery
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1.5rem",
            }}
          >
            {shuffledImages.map((src, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "opacity 0.5s ease-in-out",
                  opacity: 1,
                  animation: `fadeIn 1s ease-in-out`,
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Museum;