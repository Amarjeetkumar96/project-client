import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/faculties/allfaculties');
        setFaculties(res.data);
      } catch (error) {
        console.error('Error fetching faculties:', error);
        setMessage('Error fetching faculties: ' + error.message);
      }
    };
    fetchFaculties();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/faculties/register', { name, email, designation, department });
      setMessage(res.data.message);
      if (res.status === 201) {
        setFaculties(prevFaculties => [...prevFaculties, res.data.data]);
        setName('');
        setEmail('');
        setDesignation('');
        setDepartment('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error registering faculty: ' + (error.response && error.response.data ? error.response.data.message : error.message));
    }
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f8ff', // Light sky-blue background
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#ffffff',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#00aaff', // Sky blue
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '',
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '24px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Register Faculty</h2>
      <form 
        onSubmit={handleSubmit} 
        style={formStyle}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          style={inputStyle}
        />
        <button 
          type="submit" 
          style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
        >
          Register
        </button>
      </form>
      {message && <p>{message}</p>}

      {/* 
      <table style={tableStyle}>
        <caption><h2>Faculty Details</h2></caption>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Designation</th>
            <th style={thStyle}>Department</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#ffffff' }}>
              <td style={tdStyle}>{faculty.name}</td>
              <td style={tdStyle}>{faculty.email}</td>
              <td style={tdStyle}>{faculty.designation}</td>
              <td style={tdStyle}>{faculty.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      */}
    </div>
  );
};

export default Faculty;
