import GlobalContext from "./context/GlobalContext"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"
import axios from "axios"



function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query) return;

    Promise.all([
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=da445b1f8c881fe7432f8928e0e4f76f&query=${query}`),
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=da445b1f8c881fe7432f8928e0e4f76f&language=it_IT&query=${query}`)
    ])
      .then(([res1, res2]) => {
        const allResults = [...res1.data.results, ...res2.data.results];
        setResults(allResults);
        console.log(allResults);
      })
      .catch((err) => {
        console.error("Errore durante le chiamate", err);
        setResults([]);
      });
  };


  return (
    <GlobalContext.Provider value={{results, handleSearch, query, setQuery}}>
    <Header></Header>
    <HomePage></HomePage>
    <Footer></Footer>
    </GlobalContext.Provider>
  )
}

export default App
