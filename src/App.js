import { useState, useEffect } from "react";
import NavBar from "./components/organisms/Navbar/Navbar";
import Characters from "./components/organisms/Characters/Characters";
import Home from "./components/templates/Home/Home";
import Details from "./components/organisms/Details/Details";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient()

/* const fetchCharacters = async () => {
  const res = await fetch(`https://swapi.dev/api/people/`);
  return res.json();

} */

function App() {
  /* const { data, status } = useQuery('characterDetail', fetchCharacters)
  console.log(data); */
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    async function fetchCharacters() {
      let result = await fetch('https://swapi.dev/api/people/');
      let data = await result.json();
      setCharacters(data.results)
      setLoading(false);
    }

    fetchCharacters();
  }, [])
  console.log('characters', characters); */

  return (
    <>
      <QueryClientProvider client={queryClient} >
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters loaded={loading} /* data={characters} */ />} />
            <Route path='/characters/:id' element={<Details />} />
          </Routes>

        </Router>
        <ReactQueryDevtools initialIsOpen='false' />
      </ QueryClientProvider>
    </>
  );
}

export default App;
