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

  return (
    <div className="form-container">
      <form className="competition-form" onSubmit={handleSubmit}>
        <h1>Competition Registration Form</h1>

        <label>Email *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Name of Competition to Participate *</label>
        <select
          name="competitionName"
          required
          value={formData.competitionName}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Vocal">Vocal</option>
          <option value="Instruments">Instruments</option>
          <option value="Bharathanatyam">Bharathanatyam</option>
        </select>

        <label>Category *</label>
        <select
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Sub Junior">Sub Junior</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Super Senior">Super Senior</option>
        </select>

        <label>Categories of Competition *</label>
        <select
          name="subCategory"
          required
          value={formData.subCategory}
          onChange={handleChange}
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

        <label>Date Of Birth with Proof *</label>
        <input
          type="file"
          accept=".doc,.docx,.jpg,.jpeg,.png,.mp4"
          onChange={handleFileChange}
          required
        />

        <label>Contact Number *</label>
        <input
          type="text"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleChange}
        />

        <label>Address *</label>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CompetitionForm;
