import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function Show() {
    const [details, setDetails] = useState([])
    const params = useParams()
    // const [showData, setShowData] = useState('')

    useEffect(() =>{
        fetch('https://api.tvmaze.com/shows/'+ params.id +'?embed=cast')
        .then((res)=>res.json())
        .then(data=>setDetails(data))
    },[])

    return (
        <>
            <h1>
                {details.name}
            </h1>
            <div>
                {details._embedded?.cast.map((actor, index) => 
                    <article key={index}>
                        <img src={actor.person?.image?.medium} alt={actor.person.name} />
                        <h2>{actor.person.name}</h2>
                    </article>
                )}
            </div>
        </>
    )
}
