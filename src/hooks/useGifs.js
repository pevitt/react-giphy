import {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'

export default function useGifs({ keyword }){
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
    return { loading, gifs }
}
