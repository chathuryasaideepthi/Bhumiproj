// src/components/FeedbackForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FeedbackForm.css';

const FeedbackForm = ({ role }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 5,
    comments: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', { ...form, role });
      navigate('/thank-you');
    } catch (error) {
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Rate Your Experience</label>
        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value={5}>Excellent</option>
          <option value={4}>Good</option>
          <option value={3}>Average</option>
          <option value={2}>Poor</option>
          <option value={1}>Very Poor</option>
        </select>
        <textarea
          name="comments"
          placeholder="Additional Comments"
          value={form.comments}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
