import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

type Props = { //On def un nouveau type pr typescript
    pokemon: Pokemon
    borderColor?: string // syntax propre à TS, variable is faculatif
  };
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
    const [color, setColor]= useState<string>(); //couleur crte ds le State 'color'
        
    const showBorder = () => {
        setColor(borderColor); // valeur initial de la prop save ds borderColor
    }
  
    const hideBorder = () => {
      setColor('#f5f5f5'); // we put border in grey color
  }

  const formatDate = (date: Date= new Date()): string => { //on ajoute une date par def avc "new Date" comme fct°
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }
  
    return (
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
          <div className="card horizontal" style={{ borderColor: color }}>
            <div className="card-image"> 
              <img src={pokemon.picture} alt={pokemon.name}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{pokemon.name}</p>
                <p><small>{formatDate(pokemon.created)}</small></p>
                <p><small>{pokemon.created.toString()}</small></p>
              </div>
            </div>
          </div> 
        </div>
      );
    }
  
export default PokemonCard;