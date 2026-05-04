import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFeedback({ ...formData, id: Date.now() });
    setFormData({ name: '', email: '', contactNo: '', message: '' });
  };

  return (
    <div className="form-card">
      <h2>We value your feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNo">Contact No.</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
            placeholder="+1 234 567 890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Feedback Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us what you think..."
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
