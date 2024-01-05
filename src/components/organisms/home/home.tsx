import React, { useEffect, useState } from 'react'
import './home.scss'

import { CircularProgress } from '@material-ui/core'
import ResultCards from '../../molecules/ResultCards/resultCards'
import { getAllCharacters, getAllCharactersBySpecie, getAllCharactersByGender, getNextorPrevPage, getFavorites, getFavoritesInfo, addFavoriteCharacter, deleteFavoriteCharacter, } from '../../../services/characterService'
import Carousel from '../../molecules/Carousel/carousel'


const Home = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [results, setResults] = useState<any>([])
  const [slide, setSlide] = useState<any>([])
  const [index, setIndex] = useState(1)
  const [complement, setComplement] = useState("")
  const [favorites, setFavorites] = useState<any>([])
  const [popularCharacters, setPopularCharacters] = useState<any>([])

  const getInfo = async () => {
    setLoading(true)    

    const response = await getFavorites()
    if (response && response.data) {
      setFavorites(response.data)
    }


    let data: any
    if (page === 1) {
      data = await getAllCharacters()
    } else if (page === 2) {
      data = await getAllCharactersBySpecie("Human")
      setComplement("/specie/Human")
    } else if (page === 3) {
      data = await getAllCharactersBySpecie("Alien")
      setComplement("/specie/Alien")
    } else if (page === 4) {
      data = await getAllCharactersByGender("Male")
      setComplement("/gender/Male")
    } else if (page === 5) {
      data = await getAllCharactersByGender("Female")
      setComplement("/gender/Female")
    } else if (page === 6) {
      data = await getFavoritesInfo(characterIdsArray)
      setResults(data.data)
      handlePopularCharacters(data.data)
    }

    if (page !== 6) {
      if (data && data.data && data.data.results) {
        setResults(data.data.results)
        handlePopularCharacters(data.data.results)
      }
    }
    if (data && data.data && data.data.info) {
      setSlide(data.data.info)
    }
    setIndex(1)
    setLoading(false)
  } 

  const onNextOrPrev = async (pages: any) => {
    let next: any
    
    setLoading(true)
    console.log(index);

    
    
    if (pages === "next") {
      if (slide.next != null) {
        next = await getNextorPrevPage((index + 1).toString(), complement)
        setResults(next.data.results)
        handlePopularCharacters(next.data.results)
        setSlide(next.data.info)
        setIndex(index + 1)
        window.scroll({
          top: 200,
          left: 0,
          behavior: "smooth",
        });
      }
    } else if (pages === "prev") {
      if (slide.prev != null) {
        next = await getNextorPrevPage((index - 1).toString(), complement)
        setResults(next.data.results)
        handlePopularCharacters(next.data.results)
        setSlide(next.data.info)
        setIndex(index - 1)
        window.scroll({
          top: 200,
          left: 0,
          behavior: "smooth",
        });
      }
    }     
    
    setLoading(false)
  }

  const characterIdsArray = favorites.map((item: any) => item.characterId);

  const handleToggleFavorite = async (id: any, condition: string) => {
    setLoading(true);
    try {
      if (condition === "add") {
        await addFavoriteCharacter(id);
      } else if (condition === "remove") {
        await deleteFavoriteCharacter(id);
      }
  
      const response = await getFavorites();
      setFavorites(response.data);
  
      if (page === 6) {
        const updatedCharacterIds = condition === "remove"
          ? characterIdsArray.filter((characterId: any) => characterId !== id)
          : characterIdsArray;
        const data = await getFavoritesInfo(updatedCharacterIds);
        setResults(data.data);
        if (updatedCharacterIds.length === 0) {
          setPage(1);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo()
  }, [page])

  const handlePopularCharacters = async (list: any) => {
    console.log(list);
    
    if (list && list.length > 0) {
      const filteredCharacters = list.filter((character: any) => {
        return character.episode.length >= 5;
      });
    
    setPopularCharacters(filteredCharacters);
    }
  }

  return (
    <div className="o-home">
      {loading ? (
        <div className={`o-home__loading`}>
          <CircularProgress size={64} thickness={6} color="secondary" />
        </div>
      ) : null}
      <Carousel listResult={popularCharacters} />
      <div className="o-home__sections">
        <div>Characters</div>
        <div className="o-home__sections__displayed">
          <div className={`o-home__sections__displayed__character ${page === 1 && "--selected"}`} onClick={() => setPage(1)}>All Characters</div>
          <div className={`o-home__sections__displayed__character ${page === 2 && "--selected"}`} onClick={() => setPage(2)}>Human</div>
          <div className={`o-home__sections__displayed__character ${page === 3 && "--selected"}`} onClick={() => setPage(3)}>Alien</div>
          <div className={`o-home__sections__displayed__character ${page === 4 && "--selected"}`} onClick={() => setPage(4)}>Male</div>
          <div className={`o-home__sections__displayed__character ${page === 5 && "--selected"}`} onClick={() => setPage(5)}>Female</div>
          {favorites && favorites.length > 0 && (
          <div className={`o-home__sections__displayed__character ${page === 6 && "--selected"}`} onClick={() => setPage(6)}>Favorites</div>
          )}
        </div>
      </div>
      {results.length > 0 && (
        <div className="o-home__cards">
          <div className="o-home__results">
            <ResultCards listResult={results} favorites={characterIdsArray} onToggleFavorite={handleToggleFavorite}/>
          </div>
          {page != 6 && slide && (
          <div className="o-home__pagination">
            <button type="button" onClick={() => onNextOrPrev("prev")}>{'<'}</button>
            <div>Pagina {index} de {slide.pages || 1} </div>
            <button type="button" onClick={() => onNextOrPrev("next")}>{'>'}</button>
          </div>
          )}
        </div>
      )}
     </div>
  )
}

export default Home