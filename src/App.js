import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Trivia from "./Pages/Trivia";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPageUrl])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse pokemon={pokemon}/>} />
          <Route path='/trivia' element={<Trivia />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
