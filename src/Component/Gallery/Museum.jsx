import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jsondata from "../../Data/Data.json";

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

 
  const headings = {
    tamil: {
      library: "தொல் இசை களஞ்சியம்",
      membership: "உறுப்பினர் விவரங்கள்",
      video: "அறிமுகக் காணொளி",
      gallery: "காட்சியகம்",
    },
    english: {
      library: "Tamil Music Library",
      membership: "Membership Details",
      video: "Introduction Video",
      gallery: "Gallery",
    },
  };

  const selectedHeadings = headings[language] || headings.english;

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
          {selectedHeadings.library}
        </h1>
        {/* <p style={{ fontSize: "1.2rem", marginTop: "0.5rem", fontWeight: "300" }}>
          {language === "tamil"
            ? "தமிழ் இசையின் பண்புகளை பாதுகாத்தல்"
            : "Preserving the rich heritage of Tamil music"}
        </p> */}
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
            {selectedHeadings.membership}
          </h2>

          {museumd.map((museum, index) => (
            <div key={index} style={{ padding: "20px" }}>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              >
        
                {Object.entries(museum.membership_details).map(([key, detail]) => (
                  <div
                    key={key}
                    style={{ fontSize: "1.3rem", marginBottom: "12px", fontWeight: "500" }}
                  >
                    <strong style={{ color: "#2563eb" }}>{detail.label}: </strong>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
            {selectedHeadings.video}
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
            {selectedHeadings.gallery}
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
