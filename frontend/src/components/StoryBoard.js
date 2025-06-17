// src/components/StoryBoard.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/StoryBoard.css';

const StoryBoard = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stories')
      .then(res => setStories(res.data))
      .catch(err => console.error('Failed to fetch stories:', err));
  }, []);

  return (
    <section className="stories">
      <h2>Impact Stories</h2>
      <div className="story-grid">
        {stories.map(story => (
          <div key={story._id} className="story-card">
            {story.imageUrl && <img src={story.imageUrl} alt={story.title} />}
            <div className="story-content">
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryBoard;
