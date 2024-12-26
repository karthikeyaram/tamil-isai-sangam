import React, { useState } from "react";

const Undergraduate = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderFormStep = () => {

   
    switch (currentStep) {
      case 1:
        return (
          <div
            style={{
              marginTop:"20px",
              padding: "20px",
              backgroundColor: "#e6f5f4",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 128, 128, 0.2)",
              fontFamily: "Arial, sans-serif",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                color: "#00796b",
                textAlign: "center",
                borderBottom: "3px solid #009688",
                paddingBottom: "10px",
              }}
            >
              APPLICATION FOR UG COURSE
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#004d40",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Tamil Isai Kalloori offers the following courses:
            </p>
            <ul
              style={{
                listStyleType: "decimal",
                paddingLeft: "40px",
                marginTop: "15px",
                color: "#004d40",
                lineHeight: "1.8",
              }}
            >
              <li>Certificate Course</li>
              <li>Diploma Courses</li>
              <li>Undergraduate Courses</li>
              <li>Postgraduate Courses</li>
              <li>Special Training Courses</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div
            style={{
              marginTop:"20px",
              padding: "20px",
              border: "1px solid #b2dfdb",
              borderRadius: "8px",
              backgroundColor: "#e6f5f4",
              boxShadow: "0 4px 8px rgba(0, 128, 128, 0.2)",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                backgroundColor: "#00796b",
                color: "#ffffff",
              
                padding: "10px 15px",
                borderRadius: "8px 8px 0 0",
                margin: "-20px -20px 20px",
                textAlign: "center",
              }}
            >
              Eligibility Criteria
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#004d40" }}>
              <strong>Degree (BA) course:</strong> <br />
              <strong>Eligibility:</strong> 12th standard pass or Diploma in Music.
              <br />
              <strong>Age:</strong> 22 years <br />
              <strong>Duration:</strong> Three years <br />
              <strong>Subjects:</strong> Vocal, Veenai, Violin, Bharathanatyam,
              Mrithangam
            </p>
          </div>
        );
      case 3:
        return (
          <div
            style={{
              marginTop:"20px",
              padding: "30px",
              backgroundColor: "rgba(233, 239, 241, 0.8)",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 128, 128, 0.3)",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#00796b",
                marginBottom: "20px",
                borderBottom: "3px solid #009688",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Student Application Form
            </h2>
            <form>
              {[
                { label: "Name", type: "text", placeholder: "Your Name" },
                { label: "Gender", type: "radio", options: ["Male", "Female"] },
                { label: "Date of Birth", type: "date" },
                {
                  label: "Parent/Guardian Name",
                  type: "text",
                  placeholder: "Parent/Guardian Name",
                },
                { label: "Nationality", type: "text", placeholder: "Your Nationality" },
                { label: "Religion", type: "text", placeholder: "Your Religion" },
                { label: "Caste", type: "text", placeholder: "Your Caste" },
                {
                  label: "Permanent Address",
                  type: "text",
                  placeholder: "Your Address",
                },
                { label: "Phone Number", type: "tel", placeholder: "Your Phone Number" },
                { label: "Email ID", type: "email", placeholder: "Your Email" },
                {
                  label: "Aadhar Number",
                  type: "text",
                  placeholder: "Your Aadhar Number",
                },
              ].map((field, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "10px",
                      color: "#004d40",
                    }}
                  >
                    {field.label}*
                  </label>
                  {field.type === "radio" ? (
                    <div>
                      {field.options.map((option) => (
                        <span key={option} style={{ marginRight: "20px" }}>
                          <input
                            type="radio"
                            id={option}
                            name={field.label}
                            value={option}
                          />
                          <label
                            htmlFor={option}
                            style={{ marginLeft: "5px", color: "#004d40" }}
                          >
                            {option}
                          </label>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #b2dfdb",
                        backgroundColor:"white",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#00796b")}
                      onBlur={(e) => (e.target.style.borderColor = "#b2dfdb")}
                    />
                  )}
                </div>
              ))}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "10px",
                    color: "#004d40",
                  }}
                >
                  Course Applied (Select)*
                </label>
                <div>
                  {["Vocal", "Veenai", "Violin", "Bharathanatyam", "Mrithangam"].map(
                    (course) => (
                      <span key={course} style={{ marginRight: "20px" }}>
                        <input
                          type="radio"
                          id={course}
                          name="course"
                          value={course}
                        />
                        <label
                          htmlFor={course}
                          style={{ marginLeft: "5px", color: "#004d40" }}
                        >
                          {course}
                        </label>
                      </span>
                    )
                  )}
                </div>
              </div>

              {["12th Marksheet", "Community Certificate", "Income Certificate", "Transfer Certificate"].map(
                (doc) => (
                  <div key={doc} style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        marginBottom: "10px",
                        color: "#004d40",
                      }}
                    >
                      {doc}
                    </label>
                    <input
                      type="file"
                      style={{
                        display: "block",
                        border: "1px solid #b2dfdb",
                        padding: "10px",
                        backgroundColor:"white",
                        borderRadius: "5px",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#00796b")}
                      onBlur={(e) => (e.target.style.borderColor = "#b2dfdb")}
                    />
                  </div>
                )
              )}
            </form>
          </div>
        );
      default:
        return null;
    }
    
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      {renderFormStep()}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#004d40",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Previous
          </button>
        )}
        {currentStep === 3 && (
          <button
            onClick={() => alert("Form submitted")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        )}
        {currentStep < 3 && (
          <button
            onClick={nextStep}
            style={{
              padding: "10px 20px",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Undergraduate;
