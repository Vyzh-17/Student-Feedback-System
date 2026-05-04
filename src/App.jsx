import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleAddFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Feedback Portal</h1>
        <p>Help us improve your educational experience</p>
      </header>
      
      <main className="main-content">
        <section className="form-section">
          <FeedbackForm onAddFeedback={handleAddFeedback} />
        </section>
        
        <section className="list-section">
          <FeedbackList feedbacks={feedbacks} />
        </section>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2026 Educational Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
