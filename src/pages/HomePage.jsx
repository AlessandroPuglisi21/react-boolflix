import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import axios from "axios";
import Flags from "../../context/Flags";

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

  function flags(language) {
    if (language === "en") {
      return Flags.usa;
    } else if (language === "it"){
        return Flags.ita
    } else if (language === 'ja'){
        return Flags.jap
    }
  }

  return (
    <>
      <SearchBar film={film} setFilm={setFilm} onSearch={handleSearch} />
      <h1>Film Trovati</h1>
      <ul>
        {results.length > 0 ? (
          results.map((result) => {
            const language = result.original_language
            return(
            <li key={result.id}>
              <h1>Titolo: {result.title} </h1>
              <h3>Titolo Originale: {result.original_title}</h3>
              <p>Lingua:{result.original_language}<img src={flags(language)} alt="" style={{width:"35px"}}/> </p>
              <p>Voto: {result.vote_average.toFixed(1)}</p>
            </li>
            )
          })
        ) : (
          <p>Nessun risultato trovato.</p>
        )}
      </ul>
    </>
  );
}
