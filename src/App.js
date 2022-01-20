import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";
import "./App.css";
import NavBar from "./components/organisms/Navbar/Navbar";
import Characters from "./components/organisms/Characters/Characters";
import Home from "./components/templates/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      let result = await fetch('https://swapi.dev/api/people/');
      let data = await result.json();
      setCharacters(data.results)
    }

    fetchCharacters();
    setLoading(false);
  }, [])
  console.log('characters', characters);

  return (
    <>
      <Router>
        <NavBar />
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters loaded={loading} data={characters}/>} />
          </Routes>)
        }

      </Router>
    </>
  );
}

export default App;
