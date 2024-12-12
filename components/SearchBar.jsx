import React from "react"

export default function SearchBar({film,setFilm,tvSerie, setTvSerie, onSearch}) {
const handleInput = (e) => {
    setFilm (e.target.value)
    setTvSerie (e.target.value)
}

    return(
    <div>
        <input type="text" 
        placeholder="Cerca un film o una serie TV"
        value={film || tvSerie}
        onChange={handleInput}
        />
        <button onClick={onSearch}>Cerca</button>
    </div>
    )
}