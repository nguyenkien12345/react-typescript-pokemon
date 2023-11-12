import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { URL_LIST, URL_DETAIL } from './config/config';
import { Pokemons } from './interface/Pokemons';
import { Pokemon } from './interface/Pokemon';
import { PokemonDetail } from './interface/PokemonDetail';
import { ViewDetail } from './interface/ViewDetail';
import PokemonList from './components/PokemonList';

const App:React.FC = () => {

  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [previousUrl, setPreviousUrl] = useState<string>('');
  const [viewDetail, setViewDetail] = useState<ViewDetail>({
    id: 0,
    isOpened: false,
  });

  const getPokemons = async (url: string) => {
    setIsLoading(true);
    const response = await axios.get(url);
    const pokemonList = response.data.results;
    setPreviousUrl(response.data.previous);
    setNextUrl(response.data.next);
    pokemonList.forEach( 
      async (pokemon: Pokemons, index: number) => {
        const pokemonItem = await axios.get(URL_DETAIL(pokemon.name));
        setPokemons((previousState) => [...previousState, pokemonItem.data]);
      }
    )
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemons(URL_LIST);
  }, []);

  const handleLoadMore = async () => {
    getPokemons(nextUrl);
  };

  return (
    <div className='App'>
      <div className='container'>
        <header className='pokemon-header'>Pokemon</header>
        <PokemonList pokemons={pokemons} viewDetail={viewDetail} setViewDetail={setViewDetail} />
        <div className='btn'>
          {!viewDetail.isOpened && 
          (<button onClick={handleLoadMore}>
            {isLoading ? 'Loading...' : 'Load More'}
          </button>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
