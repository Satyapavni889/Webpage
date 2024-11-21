import React, { useState } from 'react';
import { useTheme } from '../Context/Themecontext'; // Import the useTheme hook

const JobsAvailable = () => {
  const { theme } = useTheme(); // Get the current theme from the context
  const jobs = [
    { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Backend Developer', location: 'New York, USA', type: 'Contract' },
    { id: 3, title: 'UI/UX Designer', location: 'Bangalore, India', type: 'Part-time' },
    { id: 4, title: 'Project Manager', location: 'London, UK', type: 'Full-time' },
    { id: 5, title: 'Data Scientist', location: 'Berlin, Germany', type: 'Full-time' },
    { id: 6, title: 'Mobile App Developer', location: 'San Francisco, USA', type: 'Full-time' },
    { id: 7, title: 'HR Manager', location: 'Toronto, Canada', type: 'Full-time' },
    { id: 8, title: 'Software Engineer', location: 'Remote', type: 'Contract' },
    { id: 9, title: 'Graphic Designer', location: 'Sydney, Australia', type: 'Part-time' },
    { id: 10, title: 'Content Writer', location: 'London, UK', type: 'Freelance' },
    { id: 11, title: 'SEO Specialist', location: 'Remote', type: 'Full-time' },
    { id: 12, title: 'System Administrator', location: 'New York, USA', type: 'Full-time' },
    { id: 13, title: 'Product Manager', location: 'Singapore', type: 'Contract' },
    { id: 14, title: 'Cloud Engineer', location: 'San Francisco, USA', type: 'Full-time' },
    { id: 15, title: 'Business Analyst', location: 'Bangalore, India', type: 'Full-time' },
    { id: 16, title: 'Marketing Specialist', location: 'Paris, France', type: 'Part-time' },
    { id: 17, title: 'Database Administrator', location: 'Toronto, Canada', type: 'Full-time' },
    { id: 18, title: 'Sales Manager', location: 'Remote', type: 'Full-time' },
    { id: 19, title: 'Quality Assurance Engineer', location: 'London, UK', type: 'Full-time' },
    { id: 20, title: 'Network Engineer', location: 'Sydney, Australia', type: 'Contract' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal
  const [selectedJob, setSelectedJob] = useState(null); // Store the selected job

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApplyClick = (job) => {
    setSelectedJob(job); // Set the selected job
    setShowModal(true); // Show the modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    console.log('Application submitted for:', selectedJob.title);
    setShowModal(false); // Close the modal after submission
  };

  return (
    <div style={{ ...styles.container, backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <h1 style={{ ...styles.heading, color: theme.colors.text }}>Jobs Available at Truelance</h1>

      {/* Search input */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ ...styles.searchInput, borderColor: theme.colors.text }}
        />
      </div>

      {/* Cards display */}
      <div style={styles.cardsContainer}>
        {filteredJobs.map((job) => (
          <div key={job.id} style={{ ...styles.card, backgroundColor: theme.colors.cardBackground }}>
            <h2 style={{ ...styles.cardTitle, color: theme.colors.text }}>{job.title}</h2>
            <p style={{ ...styles.cardText, color: theme.colors.text }}>
              <strong>Location:</strong> {job.location}
            </p>
            <p style={{ ...styles.cardText, color: theme.colors.text }}>
              <strong>Job Type:</strong> {job.type}
            </p>
            <button
              style={{
                ...styles.applyButton,
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              }}
              onClick={() => handleApplyClick(job)} // Show modal on click
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Job Application */}
      {showModal && selectedJob && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={{ color: theme.colors.text }}>Apply for {selectedJob.title}</h2>
            <form onSubmit={handleFormSubmit} style={styles.modalForm}>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: theme.colors.text }}>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{ ...styles.input, borderColor: theme.colors.text }}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: theme.colors.text }}>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{ ...styles.input, borderColor: theme.colors.text }}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={{ ...styles.label, color: theme.colors.text }}>Resume</label>
                <input
                  type="file"
                  style={{ ...styles.input, borderColor: theme.colors.text }}
                />
              </div>
              <button type="submit" style={{ ...styles.submitButton, backgroundColor: theme.colors.primary }}>
                Submit Application
              </button>
            </form>
            <button onClick={() => setShowModal(false)} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  searchInput: {
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid layout
    gap: '20px',
    padding: '10px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  applyButton: {
    padding: '10px 15px',
    color: '#fff',
    border: '1px solid #007BFF',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  closeButton: {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    maxWidth: '100%',
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
};

export default JobsAvailable;
