import React, { useState } from 'react';
import axios from 'axios';
import { IoBagCheckSharp } from "react-icons/io5";
import './Main.css';

function Main() {
  const [form, setForm] = useState({
    title: '',
    name: '',
    email: '',
    objective: '',
    mobileNo: '',
    dob: '',
    gender: '',
    nationality: '',
    maritalStatus: '',
    hobbies: '',
    languages: '',
    address: '',
    experience: [],
    // ... add other fields as necessary
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleExperienceChange = (index, event) => {
    const values = [...form.experience];
    values[index][event.target.name] = event.target.value;
    setForm({
      ...form,
      experience: values,
    });
  };

  const handleAddExperience = () => {
    setForm({
      ...form,
      experience: [...form.experience, { title: '', company: '', joined: '', resigned: '', description: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Submit the form data to your server-side script
    axios.post('http://localhost:3001/submit-cv', form)
      .then(response => {
        console.log(response.data);
        // Show a popup message
        alert('✔️ CV submitted successfully!');
        // Redirect to the 'Extra' page
        window.location.href = '/extra';
      })
      .catch(error => console.error('Error:', error));
  };
  
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Create CV</h1>
        <label>
          CV Title:
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <label className="input-row">
        <div className="input-field">
          <span>Full Name:</span>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="input-field">
          <span>Email:</span>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        </label>
        <label>
          Objective:
          <textarea 
            name="objective" 
            onChange={handleChange} 
            value={form.objective} 
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: '100%', // adjust as needed
              height: 'auto', // adjust as needed
              resize: 'both', // allows resizing both vertically and horizontally
              overflow: 'auto' // necessary for 'resize' to work
            }}
          />
        </label>
        <label className="input-row">
          <div className="input-field">
            <span>Mobile No:</span>
            <input type="tel" name="mobileNo" onChange={handleChange} />
          </div>
          <div className="input-field">
            <span>Date Of Birth:</span>
            <input type="date" name="dob" onChange={handleChange} />
          </div>
        </label>
        <label className="input-row">
          <div className="input-field">
            <span>Gender:</span>
            <select name="gender" onChange={handleChange}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-field">
            <span>Nationality:</span>
            <input type="text" name="nationality" onChange={handleChange} />
          </div>
        </label>
        <label className="input-row">
          <div className="input-field">
            <span>Marital Status:</span>
            <input type="text" name="maritalStatus" onChange={handleChange} />
          </div>
          <div className="input-field">
            <span>Hobbies:</span>
            <input type="text" name="hobbies" onChange={handleChange} placeholder="Enter hobbies separated by commas" />
          </div>
        </label>
        <label className="input-row">
          <div className="input-field">
            <span>Languages Known:</span>
            <input type="text" name="languages" onChange={handleChange} placeholder="Enter languages separated by commas" />
          </div>
          <div className="input-field">
            <span>Address:</span>
            <input type="text" name='Address' onChange={handleChange}placeholder="Enter your address" />
          </div>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Main;
