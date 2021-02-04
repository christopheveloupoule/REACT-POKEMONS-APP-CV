import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

 
type Params = { id: string };
/*ns declarons un "type" pr une "propriete" nommer id qui correspond
à l'id du pokemon à éditer. Ns passons cette propriete au composant*/
const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
 
  /*Ns chargeons le bon pokemon ds notre STATE, celui l' id passé depuis l'URL*/
  useEffect(() => {
    POKEMONS.forEach(pokemon => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon); //Verification si le user request un pokemon avec un id qui existe,
      } //si ok on place le pokemon ds le STATE de notre composant sinn on ne fait rien dc {}vide
    })
  }, [match.params.id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            {/*Integre de 2élements, le titre puis le formulaire d'edit°,pokemon-form*/}
            <h2 className="header center">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon}></PokemonForm>
            {/*on def une 'prop' pokemon pr passer au formulaire l'objet pokemon à editer*/}
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;