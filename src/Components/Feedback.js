import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/feedback/allfeedbacks');
        setFeedbacks(res.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setMessage('Error fetching feedbacks: ' + error.message);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/feedback/register', { studentId, comments });
      setMessage(res.data.message);
      if (res.status === 201) {
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, res.data.data]);
        setStudentId('');
        setComments('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error submitting feedback: ' + (error.response && error.response.data ? error.response.data.message : error.message));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#00aaff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Submit Feedback
        </button>
      </form>
      {message && <p>{message}</p>}

      {/* Commented out feedback records portion
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <caption><h2>Feedback Records</h2></caption>
        <thead>
          <tr style={{ backgroundColor: '#1B8BB3', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Student ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{feedback.studentId}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{feedback.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
      */}
    </div>
  );
};

export default Feedback;
