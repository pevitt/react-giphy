import React, {useState} from 'react'
import { Link, useLocation } from 'wouter'

const POPULATE_GIFS = ["matrix", "venezuela", "chile", "colombia"]

export default function Home() {
    const [keyword, setkeyword] = useState('morty')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar ruta
        pushLocation(`/gif/${keyword}`)
    }

    const handleInput = evt => {
        setkeyword(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input placeholder="Search gifs..." onChange={handleInput} type="text" value={keyword} />
            </form>
            <h3>Los gifs mas populares</h3>
            <ul>
                {
                    POPULATE_GIFS.map((populate) => (
                        <li key={populate}>
                            <Link to={`/gif/${populate}`}>Gifs de {populate}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );


}