import React from 'react';
import StaticContext from '../../context/StaticContext';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function DetailGif ({ params }){
    
    // const staticConfig = useContext(StaticContext)
    // console.log(staticConfig);

    const gifs = useGlobalGifs();
    console.log(gifs);

    const { id } = params;
    const url = `https://media0.giphy.com/media/${id}/giphy.gif`;

    return (
        <img src={url} alt="Hola" />
    )

}