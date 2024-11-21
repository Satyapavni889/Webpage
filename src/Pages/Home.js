import React from 'react';
import { useTheme } from "../Context/Themecontext"; // Import the useTheme hook

const Home = () => {
  const { theme } = useTheme(); // Get the current theme from the context

  return (
    <div style={{ ...styles.container, backgroundColor: theme.colors.background, color: theme.colors.text }}>
      {/* Header Section */}
      <header style={{ ...styles.header, backgroundColor: theme.colors.primary }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujxbLnK-m89ltpvINflYi7MtV9xJBxWjS5Q&s" // Replace this with a relevant image URL
          alt="Truelance Banner"
          style={styles.banner}
        />
        <h1 style={{ ...styles.title, color: theme.colors.text }}>Welcome to Truelance</h1>
      </header>

      {/* About Section */}
      <section style={{ ...styles.aboutSection, backgroundColor: theme.colors.cardBackground }}>
        <h2 style={{ color: theme.colors.primary }}>What is Truelance?</h2>
        <p style={{ ...styles.description, color: theme.colors.text }}>
          Truelance is your one-stop platform for connecting skilled freelancers
          with employers worldwide. Whether you’re looking to hire talent or offer
          your expertise, Truelance empowers individuals and businesses to succeed
          with ease and efficiency.
        </p>
      </section>

      {/* Footer Section */}
      <footer style={{ ...styles.footer, backgroundColor: theme.colors.primary }}>
        <p style={{ color: theme.colors.text }}>
          &copy; {new Date().getFullYear()} Truelance. All rights reserved.
        </p>
        <p>
          Follow us on:
          <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer" style={{ ...styles.link, color: theme.colors.secondary }}> Facebook</a> |
          <a href="#" style={{ ...styles.link, color: theme.colors.secondary }}> Twitter</a> |
          <a href="#" style={{ ...styles.link, color: theme.colors.secondary }}> LinkedIn</a>
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    padding: '20px 0',
  },
  banner: {
    width: '100%',
    height: 'auto',
  },
  title: {
    marginTop: '20px',
    fontSize: '36px',
  },
  aboutSection: {
    padding: '20px',
    marginTop: '20px',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  footer: {
    marginTop: '40px',
    padding: '10px 0',
  },
  link: {
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Home;
