import React, {useState} from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Spinner from '../../components/Spinner/Spinner'
import {useGifs} from '../../hooks/useGifs'

const POPULATE_GIFS = ["matrix", "venezuela", "chile", "colombia"]

export default function Home() {
    const [keyword, setkeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

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
            <h3>Ultimos gifs buscados</h3>
            {
                 loading
                 ? <Spinner />
                 : <>
                     <ListOfGifs gifs={gifs} />
                 </>
            }
            {/* <ul>
                {
                    POPULATE_GIFS.map((populate) => (
                        <li key={populate}>
                            <Link to={`/gif/${populate}`}>Gifs de {populate}</Link>
                        </li>
                    ))
                }
            </ul> */}
        </>
    );


}