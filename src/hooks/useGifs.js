import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const {gifs, setGifs} = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')
  useEffect(function () {
    setLoading(true)
    
    console.log(keywordToUse);
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword])


  return {loading, gifs}
}

