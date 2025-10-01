import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Card(props) {
    const [ pokeInfo, setPokeInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.index}/`)
        .then(res => setPokeInfo(res.data)) 
    },[])

  return (
    <div>
        <p>
        {pokeInfo.name}
        {console.log(pokeInfo.sprites)}
        </p>{pokeInfo.sprites &&

        <img src={pokeInfo.sprites.front_default} alt="" />
        }
    </div>
  )
}
