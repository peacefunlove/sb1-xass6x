import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FAQ from './components/FAQ'
import Resources from './components/Resources'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home 🏠</Link></li>
          <li><Link to="/about">About 🧐</Link></li>
          <li><Link to="/faq">FAQ 🤔</Link></li>
          <li><Link to="/resources">Resources 📚</Link></li>
          <li><Link to="/news">News 📰</Link></li>
          <li><Link to="/contact">Contact 📞</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>© 2023 RAEL.org Information Site. This is an independent informational website about RAEL.org. 🌟</p>
      </footer>
    </div>
  )
}

export default App