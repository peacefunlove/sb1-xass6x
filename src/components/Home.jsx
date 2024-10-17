import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [isFloating, setIsFloating] = useState(false);

  const toggleFloat = () => {
    setIsFloating(!isFloating);
  };

  return (
    <div className={`home content-section ${isFloating ? 'floating' : ''}`}>
      <h1>Welcome to the Super Fun RAEL.org Info Site! 🎉</h1>
      <p>Hey there, space explorers! 🚀 Ready to learn about some out-of-this-world stuff?</p>
      <p>RAEL.org is all about believing that super-smart aliens created life on Earth. How cool is that? 👽</p>
      <p>Wanna know more? Check out this free e-book: <a href="https://rael.org/downloads" target="_blank" rel="noopener noreferrer">Click here for an epic space adventure! 📚</a></p>
      <Link to="/about" className="fun-button">Blast off to learn more about RAEL.org! 🛸</Link>
      <br /><br />
      <button className="fun-button" onClick={toggleFloat}>
        {isFloating ? "Stop Floating" : "Make Me Float!"}
      </button>
    </div>
  )
}

export default Home