import NavBar from "./components/organisms/Navbar/Navbar";
import Characters from "./components/organisms/Characters/Characters";
import Home from "./components/templates/Home/Home";
import Details from "./components/organisms/Details/Details";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient} >
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/characters/:id' element={<Details />} />
          </Routes>

        </Router>
        <ReactQueryDevtools initialIsOpen='false' />
      </ QueryClientProvider>
    </>
  );
}

export default App;
