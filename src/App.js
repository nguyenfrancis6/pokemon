import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Trivia from "./Pages/Trivia";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/trivia' element={<Trivia />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
