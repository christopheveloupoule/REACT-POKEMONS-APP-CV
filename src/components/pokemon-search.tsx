import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

const PokemonSearch: FunctionComponent = () => {
 
//on def 2 états pr ce composant
  const [term, setTerm] = useState<string>(''); //save le term de recherch pr le user
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); //stock ls pokemons corresp. aux termes de recherches

//On def ls METHOD propr aux formulaire ds REACT lorsque le user saisi une valeur
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term); //MAJ le state de notre composant avec la nvelle value du "term" demander pr le user

//On verif que le "term" demandé pr le user fait au moins 2 caract de lg 
    if(term.length <= 1) {
      setPokemons([]); //si qu'un seul caract aucun affichage...
      return;
    }

//On appelle la METHOD searchPokemon en lui passant en param le terme de recherche du user
//et on remplit le STATE ds results avc les Pokemon demandés
    PokemonService.searchPokemon(term).then(pokemons => setPokemons(pokemons));
  }
 
  return (
    <div className="row"> 
    <div className="col s12 m6 offset-m3"> 
      <div className="card"> 
      <div className="card-content"> 
        <div className="input-field"> 
        <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="collection-item">
            {pokemon.name}
          </Link> /*On list ls Pokemons recuperer depuis le STATE qui corresp au result de la recherche,
          si le user click sr un des pokemon de la liste ds results, on le redirige vers la fiche detaillée de ce Pokemon*/
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
 
export default PokemonSearch;