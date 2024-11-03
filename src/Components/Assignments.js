import React from 'react';

const Assignments = () => {
  const assignments = [
    { subject: 'NPS', dueDate: '2024-08-15', type: 'Skill' },
    { subject: 'TOC', dueDate: '2024-08-20', type: 'ALM' },
    { subject: 'DAA', dueDate: '2024-08-25', type: 'Home Assignment' },
    { subject: 'MSWD', dueDate: '2024-08-30', type: 'Tutorial' },
    { subject: 'LINUX', dueDate: '2024-09-05', type: 'ALM' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Assignments</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#00aaff', color: '#fff' }}>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Subject</th>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Due Date</th>
            {/* Commented out grading column
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Grading</th>
            */}
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Type</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index} style={index % 2 === 0 ? { backgroundColor: '#f9f9f9' } : {}}>
              <td style={{ padding: '15px', border: '1px solid #ddd' }}>{assignment.subject}</td>
              <td style={{ padding: '15px', border: '1px solid #ddd' }}>{assignment.dueDate}</td>
              {/* Commented out grading column data
              <td style={{ padding: '15px', border: '1px solid #ddd' }}>{assignment.grading}</td>
              */}
              <td style={{ padding: '15px', border: '1px solid #ddd' }}>{assignment.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
