import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const ContactBody = () => {
  const { language } = useSelector((state) => state.language); // Redux selector for language


  const translations = {
    tamil: {
      heading: "தொடர்பு ",
      labels: {
        name: "பெயர்",
        email: "மின்னஞ்சல்",
        subject: "பொருள்",
        comment: "கருத்து",
        button: "விண்ணப்பிக்க",
      },
    },
    english: {
      heading: "CONTACT ",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        comment: "Comment",
        button: "APPLY NOW",
      },
    },
  };

  const currentLanguage = translations[language] || translations.english; 

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f9", paddingBottom: "40px" }}>
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 10px", fontSize: "32px", color: "#333" }}>{currentLanguage.heading}</h1>
      </div>

      {/* Contact Form */}
      <div style={{ padding: "40px", maxWidth: "800px", margin: "10px auto", backgroundColor: "#fff", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>{currentLanguage.labels.name}</label>
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
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>{currentLanguage.labels.email}</label>
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
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>{currentLanguage.labels.subject}</label>
            <input
              type="text"
              style={{
                width: "205%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                color: "#333",
                fontSize: "10px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#444" }}>{currentLanguage.labels.comment}</label>
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
            ></textarea>
          </div>

          <div style={{ gridColumn: "span 2", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "12px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              {currentLanguage.labels.button}
            </button>
          </div>
        </form>
      </div>

      {/* Google Map with contact information inside */}
      <div style={{ position: "relative", width: "100%", height: "500px", marginTop: "50px" }}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.1979599529645!2d80.27544!3d13.086637000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f53a6aaac27%3A0x3340167f0f9bd3c7!2sRaja%20Annamalai%20Mandram!5e0!3m2!1sen!2sus!4v1735040443215!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactBody;
