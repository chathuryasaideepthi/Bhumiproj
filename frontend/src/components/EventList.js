// src/components/EventList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/events')
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Error loading events');
        setLoading(false);
      });
  }, []);

  return (
    <section className="events">
      <h2>🎉 Upcoming Events</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((evt) => (
          <div key={evt._id} className="event-card">
            <h3>{evt.title}</h3>
            <p>{new Date(evt.date).toLocaleDateString()}</p>
            <p>{evt.description}</p>
            <button onClick={() => alert(`Buy ticket for ${evt.title}`)}>
              Buy Ticket – ₹{evt.ticketPrice}
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default EventList;
