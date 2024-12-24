import React, { useState, useEffect } from "react";

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
    "18.jpg"
  ];

 
  const [shuffledImages, setShuffledImages] = useState(imageSources);

  // Function to shuffle images and swap positions randomly
  const swapImages = () => {
    const shuffled = [...shuffledImages];
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    const firstImage = shuffled.shift(); // Remove the first image
    shuffled.splice(randomIndex, 0, firstImage); // Insert it at a random position
    setShuffledImages(shuffled);
  };

  // Shuffle images every 1.5 seconds (faster swap)
  useEffect(() => {
    const interval = setInterval(swapImages, 1500); // Faster shuffle interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [shuffledImages]);

  // Function to generate random directions for image movement
  const getRandomDirection = () => {
    const directions = ['Up', 'Down', 'Left', 'Right'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    return randomDirection;
  };

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
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
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
            minWidth: "300px"
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem"
            }}
          >
            Membership Details
          </h2>
          <ul style={{ color: "#374151", fontSize: "1.5rem", lineHeight: "1.75rem", padding: "20px" }}>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Location:</strong> Tamil Music Academy, Raja Annamalai Mandram, Chennai - 600 108.
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Visiting Hours:</strong> Tuesday to Saturday, 10:00 AM to 5:00 PM
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Membership Fee:</strong> ₹20 per person
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Free Entry:</strong> For students under 21 years and senior citizens (Age proof required)
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Foreign Nationals:</strong> ₹200
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Educational Institutions:</strong> ₹300 (Special fee for institutions)
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Contact:</strong> +91 44 2534 1425 / 2533 0350
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Supervisor:</strong> Dr. Lalitha Jawahar
            </li>
            <li style={{ padding: "7px" }}>
              <strong style={{ color: "#2563eb" }}>Phone (Supervisor):</strong> +91 96001 29724
            </li>
          </ul>
        </section>

      
        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            flex: "1 1 45%",
            minWidth: "300px"
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem"
            }}
          >
            Introduction Video
          </h2>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
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
                objectFit: "cover"
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
            width: "100%"
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem"
            }}
          >
            Gallery
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1.5rem",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {shuffledImages.map((src, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  animation: `move${getRandomDirection()} 0.3s ease-in-out`
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
                    transition: "transform 0.3s ease, opacity 0.3s ease"
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <style>
        {`
          @keyframes moveUp {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes moveDown {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes moveLeft {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes moveRight {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .move-up {
            animation: moveUp 0.3s ease-in-out;
          }

          .move-down {
            animation: moveDown 0.3s ease-in-out;
          }

          .move-left {
            animation: moveLeft 0.3s ease-in-out;
          }

          .move-right {
            animation: moveRight 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Museum;
