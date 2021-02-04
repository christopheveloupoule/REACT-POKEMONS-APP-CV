import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemon';
import PokemonService from '../services/pokemon-service';

 
type Params = { id: string };
/*ns declarons un "type" pr une "propriete" nommer id qui correspond
à l'id du pokemon à éditer. Ns passons cette propriete au composant*/
const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
 
  /*Ns chargeons le bon pokemon ds notre STATE, celui l' id passé depuis l'URL*/
  useEffect(() => {
    /*Realatif a la cst POKEMONS (mock-pokemon.ts)
    POKEMONS.forEach(pokemon => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon); //Verification si le user request un pokemon avec un id qui existe,
      } //si ok on place le pokemon ds le STATE de notre composant sinn on ne fait rien dc {}vide
    })*/
    //on recupe des pokemons depuis notre APIREST et on les place dans le STATE de notre composant
    
    /*fetch(`http://localhost:3001/pokemons/${match.params.id }`) //requete de type GET en lui passant une URL
    .then(response => response.json()) //on recupe un {}response de la part de notre méthode FETCH & methode json sur cet reponse pr extraire les datas
    .then(pokemon => { //MAJ du pokemon ds ns composants
      if(pokemon.id) setPokemon(pokemon); //Verification si le user request un pokemon avec un id qui existe, 
    }) //si ok on place le pokemon ds le STATE de notre composant sinn renvoi un {} vide*/

    PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));

    /* +: astuce de syntaxe de TP qui permet de convertir une string en un nbre,le routeur 
  de React ns transmet l'ID d'un pokemon ss forme de string & la method getPokemon 
  de notre service attend un nbre en paramètre
  Method getPokemon de notre service pr recupèrer un Pokemon unique
   */
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