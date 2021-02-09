import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon'; //representat° model for 'type' our variables
//import POKEMONS from '../models/mock-pokemon'; //Add cst 'Pokemon' contains data of 'Pokemon'
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';

/*On def un type nommé params pr recup l'ID que ns allons 
recup depuis l'URL, cet id est envoyé sous la forme d'une 
chaine de caractère par le router de react */
type Params = { id: string };

/*on utilise l'importat° 'RouteComponentProps' précédente pr typer 
le parmètre reçu depuis le routeur, pas une prop classique, donnée qui vient de l'url*/ 
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

/*On def un state pr save le pokemon à afficher
par def, state a la valeur null
<Pokemon|null> soit valeur de Pokemon soit valeur null, sorte de type hybride...*/
    
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
/*Hook d'effet dans lequel une boucle permet de retrouver le pokemon
avc l'id passer en paramètre
si paramètre url = id d'un pokemon de la liste, on l'affect 
au state du composant via la méthode setPokemon,
si aucun pokemon trouver de cette façon alors pokemon = 0*/

  useEffect(() => {
    /*POKEMONS.forEach(pokemon => { //boucle permet de retrouver le pok avc l'id passé en param
      if (match.params.id === pokemon.id.toString()) { //si aucun pokemon trouver alors pokemon vaut null
        setPokemon(pokemon);
      }
    })*/
    
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
      { pokemon ? ( //opérateur ternaire qui affiche un pokemon sinon rien à afficher...
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn-floating halfway-fab waves-effect waves-light">
                  <i className="material-icons">edit</i>
                </Link> {/*Ajout du bouton d'edition (avc qqs classes de materialise pr positionner le bouton correctement)*/}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Points de vie</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Dégâts</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span> //affichage type pokemon
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(pokemon.created)}</td>  
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : ( //sinon aucun pokemon a afficher
        <h4 className="center"><Loader/>{/*Aucun pokémon à afficher!*/}</h4>
      )}
    </div>
  );
}
  
export default PokemonsDetail;