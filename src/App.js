import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './Components/Navbar/Navbar.css'
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Trivia from "./Pages/Trivia";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-router-dom";
import pokemon_logo from "./assets/pokemon_logo.png";
import hamburger from './assets/hamburger.png'
import exit from './assets/exit.png'

function App() {
  const defaultColor = "linear-gradient(rgba(247,34,34,1), rgba(247,34,34,0.3))";
  const triviaColor = "linear-gradient(#6da6f1, #e2e2e7)";
  
  const [color, setColor] = useState(localStorage.getItem('backgroundColor') || defaultColor);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  useEffect(() => {
    // Set color based on initial path
    if (window.location.pathname === "/trivia") {
      setColor(triviaColor);
    } else {
      setColor(defaultColor);
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const redExit = () => {
    setColor(defaultColor);
    setIsModalOpen(!isModalOpen);
  }

  const blueExit = () => {
    setColor(triviaColor);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="App" style={{ background: color }}>
      <Router>
        <nav className="nav">
          <div className="nav-logo">
            <img className="nav-logo-img" src={pokemon_logo} alt="pokemon logo" />
          </div>
          <button className="nav-toggle" onClick={toggleModal}>
            <img src={hamburger} alt="hamburger icon"/>
          </button>
          <div className={`nav-menu ${isModalOpen ?  'open' : ''}`}>
          {isModalOpen && (
            <div className="nav-modal">
              <button className="exit" onClick={toggleModal}>
                <img src={exit} alt="exit button"/>
              </button>
              <ul className="nav-list-modal">
                <li>
                  <Link
                    to="/"
                    className="nav-item-modal"
                    onClick={redExit}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="nav-item-modal"
                    onClick={redExit}
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trivia"
                    className="nav-item-modal"
                    onClick={blueExit}
                  >
                    Trivia
                  </Link>
                </li>
              </ul>
            </div>
          )}
            <ul className="nav-list">
              <Link
                to="/"
                className="nav-item"
                onClick={() => setColor(defaultColor)}
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="nav-item"
                onClick={() => setColor(defaultColor)}
              >
                Browse
              </Link>
              <Link
                to="/trivia"
                className="nav-item"
                onClick={() => setColor(triviaColor)}
              >
                Trivia
              </Link>
            </ul>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
