import React from 'react';

const TimeTable = () => {
  const headerRow = ['Slot', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  const timetable = [
    ['Monday', 'NPS-CO11', 'DAA-M202', '-R301B', 'NPS-R301B', ],
    ['Tuesday', 'DAA-C407', 'DBMS-C318A', 'TOC-C225', 'TOC-C225', '***', 'MSWD-C421B1', ],
    ['Wednesday', 'NPS-R201', 'NPS-R304A', 'DBMS-C422', 'DBMS-C422', ],
    ['Thursday', 'MSWD-C017', 'MSWD-M306', 'DAA-R405B', 'DAA-R405B', '***', 'DAA-L615', ],
    ['Friday', 'TOC-C407', 'TOC-C608', 'MSWD-C217', 'LAA-C217', ]
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Time Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#00aaff', color: '#ffffff' }}>
            {headerRow.map((headerCell, index) => (
              <th key={index} style={{ padding: '12px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>{headerCell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#fff' }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center', color: '#555', fontSize: '14px' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
