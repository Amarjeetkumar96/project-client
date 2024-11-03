import React from 'react';

const Home = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
  };

  const videoStyle = {
    width: '80%', // Adjust this value to set the width of the video
    maxWidth: '600px', // Maximum width for responsive design
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Student Portal</h1>
      
      {/* Adding a video element */}
      <video style={videoStyle} controls>
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>Welcome 2300090003</p>
    </div>
  );
};

export default Home;
