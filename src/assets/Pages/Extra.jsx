import React, { useState } from 'react';
import { IoBagCheckSharp, IoCloseCircleSharp } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import Modal from 'react-modal';
import './Extra.css';

Modal.setAppElement('#root'); // Assuming your app's root element has the id 'root'

const Extra = () => {
  const [form, setForm] = useState({experience: []}); // Initialize your state
  const [experienceModalIsOpen, setExperienceModalIsOpen] = useState(false); // Add this state for controlling the experience modal
  const [educationModalIsOpen, setEducationModalIsOpen] = useState(false); // Add this state for controlling the education modal
  const [submittedExperiences, setSubmittedExperiences] = useState([]); // Add this state to hold the submitted experiences

  // Define the handleAddExperience function
  const handleAddExperience = () => {
  setForm({experience: []}); // Reset the form state
  handleAddNewExperience(); // Add a new experience when "Add New" is clicked
  setExperienceModalIsOpen(true); // Then open the modal
  };

  // Define the handleExperienceChange function
  const handleExperienceChange = (index, event) => {
    // Add your logic for handling experience change here
    const experiences = [...form.experience];
    experiences[index][event.target.name] = event.target.value;
    setForm(prevState => ({...prevState, experience: experiences}));
  };

  // Define the handleAddNewExperience function
  const handleAddNewExperience = () => {
    setForm(prevState => ({
      ...prevState, 
      experience: [...prevState.experience, { title: '', company: '', joined: '', resigned: '', description: '' }]
    }));
  };

  // Define the handleSubmitExperience function
  const handleSubmitExperience = (index) => {
    setSubmittedExperiences(prevState => [...prevState, form.experience[index]]);
    setForm(prevState => {
      const experiences = [...prevState.experience];
      experiences.splice(index, 1);
      return {...prevState, experience: experiences};
    });
    if (form.experience.length === 1) {
      setExperienceModalIsOpen(false);
    }
  };

  // Add state for education
  const [education, setEducation] = useState([]);
  const [submittedEducation, setSubmittedEducation] = useState([]);

  // Add functions for education
 const handleAddEducation = () => {
  setEducation([]); // Reset the education state   handleAddNewExperience(); // Add a new experience when "Add New" is clicked
  setEducation(prevState => [...prevState, { school: '', degree: '', start: '', end: '', description: '' }]);
  setEducationModalIsOpen(true); // Then open the modal
};


  const handleEducationChange = (index, event) => {
    const newEducation = [...education];
    newEducation[index][event.target.name] = event.target.value;
    setEducation(newEducation);
  };

  const handleSubmitEducation = (index) => {
  setSubmittedEducation(prevState => [...prevState, education[index]]);
  setEducation(prevState => prevState.filter((_, i) => i !== index));
  if (education.length === 1) {
    setEducation([]); // Reset the education state
    setEducationModalIsOpen(false);
  }
};

 // Add state for skills
  const [skills, setSkills] = useState([]);
  const [submittedSkills, setSubmittedSkills] = useState([]);
  const [skillsModalIsOpen, setSkillsModalIsOpen] = useState(false); // Add this state for controlling the skills modal

  // Add functions for skills
  const handleAddSkill = () => {
    setSkills([]); // Reset the education state 
    setSkills(prevState => [...prevState, { skill: '' }]);
    setSkillsModalIsOpen(true); // Then open the modal
  };

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index][event.target.name] = event.target.value;
    setSkills(newSkills);
  };

  const handleSubmitSkill = (index) => {
    setSubmittedSkills(prevState => [...prevState, skills[index]]);
    setSkills(prevState => prevState.filter((_, i) => i !== index));
    if (skills.length === 1) {
      setSkills([]); // Reset the skills state
      setSkillsModalIsOpen(false);
    }
  };

  return (
      <div style={{ overflowY: 'auto', maxHeight: '500px', border: '1px solid black', backgroundColor: 'white', padding: '10px' }}>
      <Modal isOpen={experienceModalIsOpen} onRequestClose={() => setExperienceModalIsOpen(false)}>
        <button type="button" onClick={() => setExperienceModalIsOpen(false)} style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <IoCloseCircleSharp />
        </button>
        {form.experience.map((exp, index) => (
          <div key={index} style={{ border: '3px solid black', padding: '35px', paddingLeft:'20px', marginBottom: '10px' }}>
            <label>
              Position/Job Role:
              <input type="text" name="title" value={exp.title} onChange={event => handleExperienceChange(index, event)} />
            </label>
            <label>
              Company:
              <input type="text" name="company" value={exp.company} onChange={event => handleExperienceChange(index, event)} />
            </label>
            <div className="input-row">
              <label>
                Joined
                <br />
                <input type="date" name="joined" value={exp.joined} onChange={event => handleExperienceChange(index, event)} style={{ width: '150px' }} />
              </label>
              <label>
                Resigned
                <br />
                <input type="date" name="resigned" value={exp.resigned} onChange={event => handleExperienceChange(index, event)} style={{ width: '150px' }} />
              </label>
            </div>
            <label>
              Job Description:
              <textarea 
                name="description" 
                value={exp.description} 
                onChange={event => handleExperienceChange(index, event)} 
                style={{ width: '100%', height: '100px', backgroundColor: 'white', color: 'black'  }} 
              />
            </label>
            <button type="button" onClick={() => handleSubmitExperience(index)} style={{ marginTop: '10px' }}>Add Experience</button>
          </div>
        ))}
      </Modal>
      <Modal isOpen={educationModalIsOpen} onRequestClose={() => setEducationModalIsOpen(false)}>
        <button type="button" onClick={() => setEducationModalIsOpen(false)} style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <IoCloseCircleSharp />
        </button>
        {education.map((edu, index) => (
          <div key={index} style={{ border: '3px solid black', padding: '35px', paddingLeft:'20px', marginBottom: '10px' }}>
            <label>
              School:
              <input type="text" name="school" value={edu.school} onChange={event => handleEducationChange(index, event)} />
            </label>
            <label>
              Degree:
              <input type="text" name="degree" value={edu.degree} onChange={event => handleEducationChange(index, event)} />
            </label>
            <div className="input-row">
              <label>
                Start
                <br />
                <input type="date" name="start" value={edu.start} onChange={event => handleEducationChange(index, event)} style={{ width: '150px' }} />
              </label>
              <label>
                End
                <br />
                <input type="date" name="end" value={edu.end} onChange={event => handleEducationChange(index, event)} style={{ width: '150px' }} />
              </label>
            </div>
            <label>
              Description:
              <textarea 
                name="description" 
                value={edu.description} 
                onChange={event => handleEducationChange(index, event)} 
                style={{ width: '100%', height: '100px', backgroundColor: 'white', color: 'black'  }} 
              />
            </label>
            <button type="button" onClick={() => handleSubmitEducation(index)} style={{ marginTop: '10px' }}>Add Education</button>
          </div>
        ))}
      </Modal>
      <Modal isOpen={skillsModalIsOpen} onRequestClose={() => setSkillsModalIsOpen(false)}>
        <button type="button" onClick={() => setSkillsModalIsOpen(false)} style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <IoCloseCircleSharp />
        </button>
        {skills.map((skill, index) => (
          <div key={index} style={{ border: '3px solid black', padding: '35px', paddingLeft:'20px', marginBottom: '10px' }}>
            <label>
              Skill:
              <input type="text" name="skill" value={skill.skill} onChange={event => handleSkillChange(index, event)} />
            </label>
            <button type="button" onClick={() => handleSubmitSkill(index)} style={{ marginTop: '10px' }}>Add Skill</button>
          </div>
        ))}
      </Modal>
      <div style={{ borderTop: '1px solid black', width: '100%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IoBagCheckSharp style={{color:'black', fontSize:'50px'}}/>
            <h2 style={{ marginLeft: '10px', color:'black' }}>Experience</h2>
          </div>
          <button type="button" onClick={handleAddExperience} style={{ marginLeft: '540px' }}>Add New</button>
        </div>
        {submittedExperiences.map((exp, index) => (
          <div key={index} style={{ color: 'black', border: '1px solid black', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <h3>{exp.title}</h3>
            <p>{exp.company}, {exp.location} ({exp.joined} - {exp.resigned === '' ? 'Currently Working' : exp.resigned})</p>
            <p>{exp.description}</p>
          </div>
        ))}
        <div style={{ borderTop: '1px solid black', width: '100%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdCastForEducation style={{color:'black', fontSize:'50px'}}/>
            <h2 style={{ marginLeft: '10px', color:'black' }}>Education</h2>
          </div>
          <button type="button" onClick={handleAddEducation} style={{ marginLeft: '540px' }}>Add New</button>
        </div>
        {submittedEducation.map((edu, index) => (
          <div key={index} style={{ color: 'black', border: '1px solid black', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <h3>{edu.school} | {edu.degree}</h3>
            <p>({edu.start} - {edu.end === '' ? 'Currently Studying' : edu.end})</p>
            <p>{edu.description}</p>
          </div>
        ))}
        <div style={{ borderTop: '1px solid black', width: '100%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SiSkillshare style={{color:'black', fontSize:'50px'}}/>
            <h2 style={{ marginLeft: '10px', color:'black' }}>Skills</h2>
          </div>
          <button type="button" onClick={handleAddSkill} style={{ marginLeft: '540px' }}>Add New</button>
        </div>
        {submittedSkills.map((skill, index) => (
          <div key={index} style={{ color: 'black', border: '1px solid black', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <p>{skill.skill}</p>
          </div>
        ))}
    </div>
    
  )
}
export default Extra;
