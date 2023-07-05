import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
//import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <aside className="sidebar">
            <Sidebar />
          </aside>
        </main>

      </div>
    </Router>
  );
}

export default App;
