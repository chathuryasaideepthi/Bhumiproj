// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        {/* Feedback Forms */}
        <Route path="/feedback/donor" element={<FeedbackForm role="donor" />} />
        <Route path="/feedback/volunteer" element={<FeedbackForm role="volunteer" />} />
        <Route path="/feedback/participant" element={<FeedbackForm role="participant" />} />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Event Listing */}
        <Route path="/events" element={<EventList />} />

        {/* Donation Form */}
        <Route path="/donate" element={<DonationForm />} />

        {/* Impact Stories */}
        <Route path="/stories" element={<StoryBoard />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

        {/* Optional: Default route or home */}
        <Route path="/" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
