import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function PokeInfo() {
    const {id} = useParams()

    const [ pokeData, setPokeData] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokeData(res.data)) 
    },[id])

  return (
    <div>
        {console.log(pokeData)}
        PokeInfo de {pokeData.name}
    </div>
  )
}
