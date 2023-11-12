import React, {useState, useEffect} from 'react';
import '../pokemon.css';
import { Pokemon } from '../../interface/Pokemon';
import { PokemonDetail } from '../../interface/PokemonDetail';
import { ViewDetail } from '../../interface/ViewDetail';

interface Props {
  pokemon: PokemonDetail;
  viewDetail: ViewDetail;
  setViewDetail: React.Dispatch<React.SetStateAction<ViewDetail>>;
}

const PokemonItem:React.FC<Props> = (props) => {

  const {pokemon, viewDetail, setViewDetail} = props;
  const [isSelected, setSelected] = useState<Boolean>(false);

  useEffect(() => {
    setSelected(pokemon.id === viewDetail?.id);
  }, [viewDetail]);

  const handleCloseViewDetail = () => {
      setViewDetail({
        id: 0,
        isOpened: false,
      });
  };

  return (
    <>
      {
        isSelected 
        ?
        (
        <section className='pokemon-list-detailed'>
          <div className='detail-container'>
            <p className='detail-close' onClick={handleCloseViewDetail}>X</p>

            <div className="detail-info">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className='detail-img' />
              <p className='detail-name'>{pokemon.name}</p>
            </div>

            <div className="detail-skill">
              <p className="detail-ability">Abilities: </p>
              {
                pokemon.abilities?.map((ab: any, index: number) => {
                  return (
                    <div>{ab.ability.name}</div>
                  );
                })
              }
            </div>
          </div>
        </section>
        )
        :
        (
        <section className='pokemon-list-container'>
          <p className='pokemon-name'> {pokemon.name} </p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </section>
        )
      }
    </>
  )
}

export default PokemonItem;
