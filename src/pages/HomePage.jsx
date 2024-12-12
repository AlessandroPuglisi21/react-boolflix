import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [film, setFilm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!film) return; 

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=da445b1f8c881fe7432f8928e0e4f76f&query=${film}`
      )
      .then((res) => {
        setResults(res.data.results); 
        console.log(res.data.results); 
      })
      .catch((err) => {
        console.log("Errore durante la ricerca", err);
        setResults([]); 
      });
  };

  return (
    <>
      <h1>Film Trovati</h1>
      <SearchBar
        film={film}
        setFilm={setFilm}
        onSearch={handleSearch}
      />
      <ul>
        {results.length > 0 ? (
          results.map((result) => (
            <li key={result.id}>
              {result.title}
            </li>
          ))
        ) : (
          <p>Nessun risultato trovato.</p>
        )}
      </ul>
    </>
  );
}
