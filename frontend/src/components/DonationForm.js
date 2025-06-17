// src/components/DonationForm.js
import { useState } from 'react';
import axios from 'axios';
import '../styles/DonationForm.css';

const DonationForm = () => {
  const [form, setForm] = useState({ donorName: '', email: '', amount: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post('http://localhost:5000/api/donations', { ...form, method: 'UPI' })
      .then(() => {
        alert('Thank you for your donation!');
        setForm({ donorName: '', email: '', amount: '' });
      })
      .catch(() => {
        alert('There was an error processing your donation.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="donation-form">
      <h2>Donate Securely</h2>
      <p>Support our cause via UPI</p>
      <input
        name="donorName"
        placeholder="Name"
        value={form.donorName}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        placeholder="Amount (INR)"
        type="number"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Processing...' : 'Donate via UPI'}
      </button>
    </section>
  );
};

export default DonationForm;
