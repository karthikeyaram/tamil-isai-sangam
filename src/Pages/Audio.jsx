import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Audio = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const navigate = useNavigate();

  // Audio files array
  const audioFiles = [
    { id: 1, name: "Song 1", src: "/audios/song1.mp3" },
    { id: 2, name: "Song 2", src: "/audios/song2.mp3" },
    { id: 3, name: "Song 3", src: "/audios/song3.mp3" },
    { id: 4, name: "Song 4", src: "/audios/song4.mp3" },
    { id: 5, name: "Song 5", src: "/audios/song5.mp3" },
    { id: 6, name: "Song 6", src: "/audios/song6.mp3" },
    { id: 7, name: "Song 7", src: "/audios/song7.mp3" },
    { id: 8, name: "Song 8", src: "/audios/song8.mp3" },
    { id: 9, name: "Song 9", src: "/audios/song9.mp3" },
    { id: 10, name: "Song 10", src: "/audios/song10.mp3" },
  ];

  const handleDownload = (audio) => {
    if (!isLoggedIn) {
      alert("Please login to download!");
      navigate("/login");
    } else {
      const link = document.createElement("a");
      link.href = audio.src;
      link.download = audio.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            <h1>Audio Files</h1>
            {audioFiles.map((audio) => (
              <div className="col-md-6" key={audio.id}>
                <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{audio.name}</p>
                  <audio controls>
                    <source src={audio.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <br />
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDownload(audio)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
