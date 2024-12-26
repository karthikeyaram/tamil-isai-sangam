import React, { useState } from "react";

function CompetitionForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    competitionName: "",
    category: "",
    subCategory: "",
    dobProof: null,
    contactNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, dobProof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  // Styles for the layout
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "70px",
  };

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "15px 0",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    width: "100%",
    borderRadius: "8px 8px 0 0",
  };

  const formContainerStyle = {
    width: "100%",
    padding: "20px",
    maxWidth: "500px",
    // backgroundColor: "#ffffff",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "6px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    backgroundColor: "#fff",
    color: "#333",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "1.1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  };

  const formHeadingStyle = {
    textAlign: "center",
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const textareaStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    height: "120px",
    resize: "vertical",
    backgroundColor: "#fff",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>Competition Registration</header>

      <div style={formContainerStyle} >
        <form className="competition-form" onSubmit={handleSubmit}>
          <h1 style={formHeadingStyle}>Register for the Competition</h1>

          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Competition Name *</label>
          <select
            name="competitionName"
            required
            value={formData.competitionName}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select</option>
            <option value="Vocal">Vocal</option>
            <option value="Instruments">Instruments</option>
            <option value="Bharathanatyam">Bharathanatyam</option>
          </select>

          <label style={labelStyle}>Category *</label>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select</option>
            <option value="Sub Junior">Sub Junior</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Super Senior">Super Senior</option>
          </select>

          <label style={labelStyle}>Sub Category *</label>
          <select
            name="subCategory"
            required
            value={formData.subCategory}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select</option>
            <option value="Thiruppavai">Thiruppavai</option>
            <option value="Thiruvempavai">Thiruvempavai</option>
            <option value="Thirupalliyezhuchi (Panniru Thirumurai)">
              Thirupalliyezhuchi (Panniru Thirumurai)
            </option>
            <option value="Thirupalliyezhuchi (Nalayira Diviya Prabhandham)">
              Thirupalliyezhuchi (Nalayira Diviya Prabhandham)
            </option>
          </select>

          <label style={labelStyle}>Date of Birth Proof *</label>
          <input
            type="file"
            accept=".doc,.docx,.jpg,.jpeg,.png,.mp4"
            onChange={handleFileChange}
            required
            style={inputStyle}
          />

          <label style={labelStyle}>Contact Number *</label>
          <input
            type="text"
            name="contactNumber"
            required
            value={formData.contactNumber}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Address *</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>

          <button
            type="submit"
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompetitionForm;
