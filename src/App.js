import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
// import JobPosting from './Pages/Jobposting';
import Chats from './Pages/Chats';
// import Community from './Pages/Community';
import JobsAvailable from './Pages/JobsAvailable';
import { ThemeProvider } from "./Context/Themecontext"; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/jobposting" element={<JobPosting />} /> */}
          <Route path="/chats" element={<Chats />} />
          {/* <Route path="/community" element={<Community />} /> */}
          <Route path="/jobs-available" element={<JobsAvailable />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
