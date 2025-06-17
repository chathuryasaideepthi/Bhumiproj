import React, { useEffect, useState, useRef } from 'react';
import { fetchDonations, fetchFeedback } from '../services/api';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaRupeeSign, FaCommentDots, FaSmile, FaSadTear, FaLightbulb } from 'react-icons/fa';
import CountUp from 'react-countup';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Dashboard() {
  const [donationData, setDonationData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const dashboardRef = useRef();

  useEffect(() => {
    const loadData = async () => {
      try {
        const donations = await fetchDonations();
        const feedback = await fetchFeedback();
        setDonationData(donations.data);
        setFeedbackData(feedback.data);
      } catch (err) {
        console.error('Failed to load data:', err);
      }
    };
    loadData();
  }, []);

  const totalDonations = donationData.reduce((sum, item) => sum + item.totalAmount, 0);
  const feedbackCounts = {
    like: feedbackData.filter(f => f.type === 'like').length,
    dislike: feedbackData.filter(f => f.type === 'dislike').length,
    suggestion: feedbackData.filter(f => f.type === 'suggestion').length,
  };

  const barChartData = {
    labels: donationData.map(item => item.eventName),
    datasets: [
      {
        label: '₹ Donations Collected',
        data: donationData.map(item => item.totalAmount),
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const pieChartData = {
    labels: ['Liked', 'Didn’t Like', 'Suggestions'],
    datasets: [
      {
        data: [feedbackCounts.like, feedbackCounts.dislike, feedbackCounts.suggestion],
        backgroundColor: ['#10b981', '#ef4444', '#facc15'],
      },
    ],
  };

  const handleExportPDF = () => {
    html2canvas(dashboardRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('BhumiDashboard.pdf');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-green-100 p-6" ref={dashboardRef}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">💼 Bhumi Admin Dashboard</h1>
        <button
          onClick={handleExportPDF}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition-all"
        >
          📤 Export as PDF
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-5 flex items-center space-x-4">
          <FaRupeeSign className="text-green-500 text-4xl" />
          <div>
            <div className="text-3xl font-bold text-gray-800">
              <CountUp end={totalDonations} duration={2} prefix="₹" separator="," />
            </div>
            <div className="text-gray-500">Total Raised</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex items-center space-x-4">
          <FaCommentDots className="text-blue-500 text-4xl" />
          <div>
            <div className="text-3xl font-bold text-gray-800">{feedbackData.length}</div>
            <div className="text-gray-500">Total Feedback</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex items-center space-x-4">
          <FaSmile className="text-yellow-400 text-4xl" />
          <div>
            <div className="text-3xl font-bold text-gray-800">{feedbackCounts.like}</div>
            <div className="text-gray-500">Liked</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">📊 Donations by Event</h2>
          <Bar data={barChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">🗣️ Feedback Summary</h2>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Feedback Type Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded-xl shadow flex items-center space-x-3">
          <FaSmile className="text-green-600 text-3xl" />
          <span className="text-lg font-medium text-green-900">Positive: {feedbackCounts.like}</span>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow flex items-center space-x-3">
          <FaSadTear className="text-red-600 text-3xl" />
          <span className="text-lg font-medium text-red-900">Negative: {feedbackCounts.dislike}</span>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow flex items-center space-x-3">
          <FaLightbulb className="text-yellow-600 text-3xl" />
          <span className="text-lg font-medium text-yellow-900">Suggestions: {feedbackCounts.suggestion}</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
