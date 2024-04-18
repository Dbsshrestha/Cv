import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import Main from './assets/Pages/Main';
import Extra from './assets/Pages/Extra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Router>
  );
}

export default App;
