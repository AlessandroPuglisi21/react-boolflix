import React from "react"

export default function SearchBar({film,setFilm,onSearch}) {
const handleInput = (e) => {
    setFilm (e.target.value)
}

    return(
    <div>
        <input type="text" 
        placeholder="Cerca un film..."
        value={film}
        onChange={handleInput}
        />
        <button onClick={onSearch}>Cerca</button>
    </div>
    )
}