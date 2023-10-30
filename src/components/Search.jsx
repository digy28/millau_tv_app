import { useState } from "react"
import { Results } from './Results.jsx'

export function Search() {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleChange = (event) => {
        setQuery(event.target.value)
        fetch('https://api.tvmaze.com/search/shows?q='+query)
        .then((res) => res.json())
        .then(data => setResults(data))
        console.log(results)
    }

    return (
        <>
            <input onChange={handleChange} />
            < Results shows = {results} />
        </>
    )

}