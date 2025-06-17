import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedbackForm from './components/FeedbackForm';
import ThankYou from './pages/ThankYou';
import EventList from './components/EventList';
import DonationForm from './components/DonationForm';
import StoryBoard from './components/StoryBoard';
import Home from './pages/Home';

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

        {/* Event Listing */}
        <Route path="/events" element={<EventList />} />

        {/* Donation Form */}
        <Route path="/donate" element={<DonationForm />} />

        {/* Impact Stories */}
        <Route path="/stories" element={<StoryBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
