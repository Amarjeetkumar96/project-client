import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Attendance from './Attendance';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/students/allstudents');
        setStudents(res.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setMessage('Error fetching students: ' + error.message);
      }
    };
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/students/register', { id, name, email, branch, year });
      setMessage(res.data.message);
      if (res.status === 201) {
        setStudents((prevStudents) => [...prevStudents, res.data.data]);
        setId('');
        setName('');
        setEmail('');
        setBranch('');
        setYear('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error registering student: ' + (error.response && error.response.data ? error.response.data.message : error.message));
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

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '24px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Register Student</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          style={inputStyle}
        />
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
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}

      {/* 
      <table style={tableStyle}>
        <caption><h2>Student Details</h2></caption>
        <thead>
          <tr>
            <th style={thStyle}>Student ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Branch</th>
            <th style={thStyle}>Year</th>
            <th style={thStyle}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} style={{ backgroundColor: student.id % 2 === 0 ? '#e6f7ff' : '#ffffff' }}>
              <td style={tdStyle}>{student.id}</td>
              <td style={tdStyle}>{student.name}</td>
              <td style={tdStyle}>{student.email}</td>
              <td style={tdStyle}>{student.branch}</td>
              <td style={tdStyle}>{student.year}</td>
              <td style={tdStyle}><Attendance studentId={student.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      */}
    </div>
  );
};

export default Students;
