import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

type Props = { //On def un nouveau type pr typescript
    pokemon: Pokemon
    borderColor?: string // syntax propre à TS, variable is faculatif
  };
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
    
    return (
        <div className="col s6 m4">
          <div className="card horizontal" style={{ borderColor:borderColor}}>
            <div className="card-image"> 
              <img src={pokemon.picture} alt={pokemon.name}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{pokemon.name}</p>
                <p><small>{pokemon.created.toString()}</small></p>
              </div>
            </div>
          </div> 
        </div>
      );
    }
  
export default PokemonCard;