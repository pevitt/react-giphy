import React, {useEffect, useState}  from 'react';
import Gif from '../Gif/Gif';
import getGifs from '../../services/getGifs';


export default function ListOfGifs({ params })
{
    console.log(params);
    const { keyword } = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        // Se ejecuta cada vez que renderice el componente
        setLoading(true)
        getGifs({ keyword })
        .then(gifs => {
          setGifs(gifs);
          setLoading(false);
        }) 
      }, [keyword]); //Si no agregamos la dependencia pues cuando se actualice el keyword no se vuelve a renderizar, esto queire decir que si le pasamos el keyword si renderiza cuando cambie la dependencia

    if (loading) return <i>Cargando...</i>
;
    return gifs.map((singleGif, index) =>  
    <Gif 
      key={singleGif.id}
      id={singleGif.id}
      title={singleGif.title} 
      url={singleGif.url} 
       
    />
  )
}

