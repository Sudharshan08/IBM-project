import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import DashboardLayout from './components/DashboardLayout';
    import Accounts from './components/Accounts';
    import Profile from './components/Profile';

    function App() {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      );
    }

    export default App;
