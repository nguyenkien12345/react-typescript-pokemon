import React from 'react';
import PokemonItem from '../PokemonItem';
import '../pokemon.css';
import { Pokemon } from '../../interface/Pokemon';
import { PokemonDetail } from '../../interface/PokemonDetail';
import { ViewDetail } from '../../interface/ViewDetail';

interface Props {
    pokemons: PokemonDetail[];
    viewDetail: ViewDetail;
    setViewDetail: React.Dispatch<React.SetStateAction<ViewDetail>>;
}

const PokemonList:React.FC<Props> = (props) => {

    const {pokemons, viewDetail, setViewDetail} = props;

    const handleSelectPokemon = (id: number) => {
      if(!viewDetail.isOpened) {
        setViewDetail({
          id: id,
          isOpened: true,
        })
      }
    };

  return (
    <>
      <section className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>

        {viewDetail.isOpened ? (<div className='overlay'></div>) : (<div className=''></div>)}

        {pokemons.map((pokemon: PokemonDetail, index: number) => {
            return (
             <div onClick={() => handleSelectPokemon(pokemon.id)}>
                <PokemonItem 
                  key={pokemon.id}
                  pokemon={pokemon}
                  viewDetail={viewDetail}
                  setViewDetail={setViewDetail}
                />
             </div>
            )
        })}
      </section>
    </>
  )
}

export default PokemonList;
