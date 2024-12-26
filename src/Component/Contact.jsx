import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactBody = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f9", paddingBottom: "40px" }}>
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 10px", fontSize: "32px", color: "#333" }}>CONTACT US</h1>
        {/* <p style={{ color: "#777", fontSize: "18px" }}>We would love to hear from you!</p> */}
      </div>

      {/* Contact Form */}
      <div style={{ padding: "40px", maxWidth: "800px", margin: "10px auto", backgroundColor: "#fff", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>Name</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                color: "#333",
                fontSize: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "border-color 0.3s ease",
              }}
            //   placeholder=" Name"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>Minanjal</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                color: "#333",
                fontSize: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "border-color 0.3s ease",
              }}
            //   placeholder="Enter Minanjal"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>Porul</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                color: "#333",
                fontSize: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "border-color 0.3s ease",
              }}
            //   placeholder="Porul"
            />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>Karuthu</label>
            <textarea
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                color: "#333",
                minHeight: "120px",
                backgroundColor: "#f9f9f9",
                fontSize: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "border-color 0.3s ease",
              }}
            //   placeholder="Karthu"
            ></textarea>
          </div>

          <div style={{ gridColumn: "span 2", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff", // Primary blue color
                color: "#fff",
                padding: "12px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"} // Darker blue on hover
              onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              APPLY NOW
            </button>
          </div>
        </form>
      </div>

      {/* Google Map with contact information inside */}
      <div style={{ position: "relative", width: "100%", height: "500px" , marginTop:"50px" }}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.1979599529645!2d80.27544!3d13.086637000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f53a6aaac27%3A0x3340167f0f9bd3c7!2sRaja%20Annamalai%20Mandram!5e0!3m2!1sen!2sus!4v1735040443215!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Contact Information Box placed inside the map */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "70%",
            transform: "translateX(-50%)",
            padding: "25px", // Added extra padding for spacing
            maxWidth: "600px",
            backgroundColor: "rgba(0, 123, 255, 0.9)", // Transparent blue background
            backgroundImage: "linear-gradient(135deg, #007bff, #00aaff)", // Blue gradient
            boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)", // Soft shadow
            borderRadius: "15px", // Rounded corners
            zIndex: "10", // Ensure it's above the map
            color: "#fff", // White text for contrast
            fontSize: "10px", // Consistent font size
            textAlign: "left", // Left align text for neatness
            lineHeight: "1.6", // Increase line height for readability
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "26px", fontWeight: "600", letterSpacing: "1px", textAlign: "center" }}>
            Contact Information
          </h2>

          <div style={{ marginBottom: "15px" }}>
            
            <p style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#fff" }}>
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', color: "#ff6f61" }} /> */}
              தமிழ்ச் இசைச் சங்கம்<br />
              இராஜா அண்ணாமலை மன்றம், 5, எஸ்பிளனேடு சாலை, <br />
              சென்னை, தமிழ் நாடு 600 108
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <p style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#fff" }}>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px', color: "#ffcc00" }} />
              +91 94449 25880 / 92822 35964
            </p>
            <p style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#fff" }}>
              <FontAwesomeIcon icon={faFax} style={{ marginRight: '10px', color: "#32cd32" }} />
              +91 44 2534 1958 / 2955 0107
            </p>
          </div>

          <div>
            <p style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#fff" }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: "#ff6347" }} />
              info@tamilisaisangam.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
