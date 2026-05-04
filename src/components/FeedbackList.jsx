import React from 'react';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="feedback-list-container">
      <h2>Recent Feedback</h2>
      {feedbacks.length === 0 ? (
        <div className="empty-state">
          <p>No feedback submitted yet. Be the first!</p>
        </div>
      ) : (
        <div className="feedback-grid">
          {feedbacks.map(feedback => (
            <div key={feedback.id} className="feedback-card">
              <div className="card-header">
                <div className="avatar">
                  {feedback.name.charAt(0).toUpperCase()}
                </div>
                <div className="user-info">
                  <h3>{feedback.name}</h3>
                  <p className="email">{feedback.email}</p>
                  <p className="contact">{feedback.contactNo}</p>
                </div>
              </div>
              <div className="card-body">
                <p>"{feedback.message}"</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
