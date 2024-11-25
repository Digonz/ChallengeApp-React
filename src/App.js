import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataTable from './views/dataTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DataTable />} />
      </Routes>
    </Router>
  );
}

export default App;
