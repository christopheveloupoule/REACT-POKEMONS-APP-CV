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

//METHOD FORMAT TYPE:

    const formatType = (type: string): string => {
        let color: string;
    
        switch (type) {
        case 'Feu': 
            color = 'red lighten-1'; 
            break; 
        case 'Eau': 
            color = 'blue lighten-1'; 
            break; 
        case 'Plante': 
            color = 'green lighten-1'; 
            break; 
        case 'Insecte': 
            color = 'brown lighten-1'; 
            break; 
        case 'Normal': 
            color = 'grey lighten-3'; 
            break; 
        case 'Vol': 
            color = 'blue lighten-3'; 
            break; 
        case 'Poison': 
            color = 'deep-purple accent-1'; 
            break; 
        case 'Fée': 
            color = 'pink lighten-4'; 
            break; 
        case 'Psy': 
            color = 'deep-purple darken-2'; 
            break; 
        case 'Electrik': 
            color = 'lime accent-1'; 
            break; 
        case 'Combat': 
            color = 'deep-orange'; 
            break; 
        default: 
            color = 'grey'; 
            break; 
        }
    
        return `chip ${color}`;
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
                {/*<p><small>{pokemon.created.toString()}</small></p>*/}
                {pokemon.types.map(type => (
                    <span key={type} className={formatType(type)}>{type}</span>
                ))}
              </div>
            </div>
          </div> 
        </div>
      );
    }
  
export default PokemonCard;