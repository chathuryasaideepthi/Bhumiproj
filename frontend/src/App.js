// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './pages/ThankYou';
import EventList from './components/EventList';
import DonationForm from './components/DonationForm';
import StoryBoard from './components/StoryBoard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Feedback Forms */}
        <Route path="/feedback/donor" element={<FeedbackForm role="donor" />} />
        <Route path="/feedback/volunteer" element={<FeedbackForm role="volunteer" />} />
        <Route path="/feedback/participant" element={<FeedbackForm role="participant" />} />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Events */}
        <Route path="/events" element={<EventList />} />

        {/* Donations */}
        <Route path="/donate" element={<DonationForm />} />

        {/* Stories */}
        <Route path="/stories" element={<StoryBoard />} />

        {/* Auth & Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Fallback route (optional) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
