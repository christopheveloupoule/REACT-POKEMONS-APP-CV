import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';

type Props = { //On def un nouveau type pr typescript
    pokemon: Pokemon
  };
  
const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {
    
  return (
    <div>
      Ce composant est chargé d'afficher le pokémon : {pokemon.name}
    </div>
  );
}
  
export default PokemonCard;