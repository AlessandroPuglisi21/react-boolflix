import Card from "../../components/Card";
import axios from "axios";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {
  const [film, setFilm] = useState("");
  const [tvSerie, setTvSerie] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!film && !tvSerie) return;

    Promise.all([
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=da445b1f8c881fe7432f8928e0e4f76f&query=${film}`),
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=da445b1f8c881fe7432f8928e0e4f76f&language=it_IT&query=${tvSerie}`)
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
    <>
      <main>
        <SearchBar film={film} setFilm={setFilm} setTvSerie={setTvSerie} onSearch={handleSearch} />
        <h1>Risultati Trovati</h1>
        <div className="card-full">
          {results.length > 0 ? (
            results.map((result) => (
              <Card key={result.id} data={result} />
            ))
          ) : (
            <p>Nessun risultato trovato.</p>
          )}
        </div>
      </main>

    </>
  );
}
