import React, {useEffect, useState}  from 'react';
import Gif from '../Gif/Gif';
// import getGifs from '../../services/getGifs';
import useGifs from '../../hooks/useGifs';

export default function ListOfGifs({ params })
{
    console.log(params);
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword })
    
    if (loading) return <i>Cargando...</i>;

    return gifs.map((singleGif, index) =>  
    <Gif 
      key={singleGif.id}
      id={singleGif.id}
      title={singleGif.title} 
      url={singleGif.url} 
       
    />
  )
}

