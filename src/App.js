import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './Components/Navbar/Navbar.css'
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Trivia from "./Pages/Trivia";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-router-dom";
import pokemon_logo from "./assets/pokemon_logo.png";

function App() {
  const [color, setColor] = useState(
    "linear-gradient(rgba(247,34,34,1), rgba(247,34,34,0.3)"
  );

  return (
    <div className="App" style={{ background: color }}>
      <Router>
        <nav className="nav">
          <div className="nav-logo">
            <img className="nav-logo-img" src={pokemon_logo} alt="" />
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <Link
                to="/"
                className="nav-item"
                onClick={() =>
                  setColor(
                    "linear-gradient(rgba(247,34,34,1), rgba(247,34,34,0.3)"
                  )
                }
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="nav-item"
                onClick={() =>
                  setColor(
                    "linear-gradient(rgba(247,34,34,1), rgba(247,34,34,0.3)"
                  )
                }
              >
                Browse
              </Link>
              <Link
                to="/trivia"
                className="nav-item"
                onClick={() => setColor("linear-gradient(#a0c5f5, #e2e2e7)")}
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
