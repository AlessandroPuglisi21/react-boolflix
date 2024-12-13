import Card from "../components/Card";
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";


export default function HomePage() {

  const {results} = useContext(GlobalContext)

  return (
    <>
      <main>
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
