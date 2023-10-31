import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function Show() {
    const params = useParams()
    const [showData, setShowData] = useState('')
    return <h1>Ceci est la page du show numéro : {params.id} </h1>
}
