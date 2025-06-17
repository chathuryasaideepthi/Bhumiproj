import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // update if backend is deployed

export const fetchDonations = () => axios.get(`${API_URL}/donations`);
export const fetchFeedback = () => axios.get(`${API_URL}/feedback`);
