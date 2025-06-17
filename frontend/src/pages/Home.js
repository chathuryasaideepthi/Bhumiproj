// src/pages/Home.js
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Bhumi</h1>
        <p>Empowering change through events, stories, and your support.</p>
      </header>

      <section className="home-section">
        <div className="home-grid">
          <Link to="/events" className="home-card">
            <h3>🎉 Upcoming Events</h3>
            <p>Discover and book tickets to our latest community events.</p>
          </Link>

          <Link to="/donate" className="home-card">
            <h3>💝 Donate</h3>
            <p>Support our mission through UPI, PayPal, or secure online payments.</p>
          </Link>

          <Link to="/stories" className="home-card">
            <h3>📖 Impact Stories</h3>
            <p>See how your support has made a real difference in lives.</p>
          </Link>

          <Link to="/feedback/donor" className="home-card">
            <h3>🗣 Donor Feedback</h3>
            <p>Tell us how we did and how we can improve the donation experience.</p>
          </Link>

          <Link to="/feedback/volunteer" className="home-card">
            <h3>🤝 Volunteer Feedback</h3>
            <p>Share your thoughts about volunteering with Bhumi.</p>
          </Link>

          <Link to="/feedback/participant" className="home-card">
            <h3>🎤 Participant Feedback</h3>
            <p>Give us your opinion on the event experience.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
