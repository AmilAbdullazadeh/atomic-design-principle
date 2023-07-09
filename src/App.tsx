import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/organisms/DashboardPage';
import LoginPage from './components/organisms/LoginPage';
import RegisterPage from './components/organisms/RegisterPage';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
