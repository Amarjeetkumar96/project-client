import React from 'react';
import './App.css'; // Importing CSS file
import { BrowserRouter as Router } from 'react-router-dom';
import PageLayout from './Components/PageLayout';

function App() {
  return (
    <Router>
      <PageLayout/>
    </Router>
  );
}

export default App;