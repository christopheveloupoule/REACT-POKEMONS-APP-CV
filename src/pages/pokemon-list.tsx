import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  //we Initialize our state component with an empty array per default
  
  useEffect(() => {
      //setPokemons(POKEMONS); on remplace cette cst en DUR pr notre APIREST via FETCH
      //on recupe des pokemons depuis notre APIREST et on les place dans le STATE de notre composant
   
      /*fetch('http://localhost:3001/pokemons') //requete de type GET en lui passant une URL
    .then(response => response.json()) //on recupe un {}response de la part de notre méthode FETCH & methode json sur cet reponse pr extraire les datas
    .then((pokemons) => { //Met à dispo ns pokemons ds le STATE de ns composants
      setPokemons(pokemons)   
    });*/
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
//utilisat° de notre service pr recup la list des pokemons depuis l'API REST
//puis on met a jour le STATE de notre composant avc les pokemon fraichemnt reçus
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
        <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/pokemon/add">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;