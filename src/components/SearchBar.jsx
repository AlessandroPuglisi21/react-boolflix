import GlobalContext from "../context/GlobalContext"
import { useContext } from "react"


export default function SearchBar() {
    const {handleSearch, query, setQuery} = useContext(GlobalContext)

    const handleInput = (e) => {
        setQuery(e.target.value)
        
    }

    return(
    <div className="search-container">
        <input className="input-bar" type="text" 
        placeholder="Cerca un film o una serie TV"
        value={query}
        onChange={handleInput}
        />
        <button onClick={handleSearch}>Cerca</button>
    </div>
    )
}