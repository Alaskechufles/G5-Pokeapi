import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { Link } from 'react-router'

export default function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(res => setPokemons(res.data.results))
    }, [])

    return (
        <div>
            <h1>PokeApi con React</h1>
            <div className=' flex gap-5 flex-wrap'>
            {pokemons.map((pokemon, index) =>
                <div className='p-3 border rounded-2xl text-center' key={index}>
                    <Link to={`/${index+1}`}>
                        <Card index={index + 1} name={pokemon.name} />
                    </Link>
                </div>
            )}
            </div>
            
        </div>
    )
}
