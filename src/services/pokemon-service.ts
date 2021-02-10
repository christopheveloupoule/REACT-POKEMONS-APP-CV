import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
  
export default class PokemonService {
  
  static pokemons:Pokemon[] = POKEMONS; //On def une variable static pr Save temporairement l'etat ds poks ds notre appli
  
  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'); // On retient l'environnement ds lequel on se trouve
  

 /*ajout de la req qui permet de recup ts les pok ds la methode getPokemons()
la method retourne le resultat de la METHOD fetch qui est une prommess contenant un []
de pokemons d'ou le type Promise<Pokemon[]>*/
  static getPokemons(): Promise<Pokemon[]> {
    if(this.isDev) { //Si on est en developpement, on fait un appel à notre APIRest
      return fetch('http://localhost:3001/pokemons') //renvoi la liste ds pokemons
      .then(response => response.json())
      .catch(error => this.handleError(error)); //err eventuel de notre promess à notre handleError
    }
  
    return new Promise(resolve => { // sinon on retourne une promess similaire à l'APIRest
      resolve(this.pokemons); //promess simulé qui retourne la liste ds pokemons egalement, on retourne la meme chose mais la source ds données est différente
    });
  }
  
  static getPokemon(id: number): Promise<Pokemon|null> { //renvoi soit une pok ou une val null (| en tp)
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${id}`) //retourne 'un' pok avc le bon id 
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data) //METHOD isEmpty
      .catch(error => this.handleError(error));  //err eventuel de notre promess à notre handleError
    }
  
    return new Promise(resolve => {    
      resolve(this.pokemons.find(pokemon => id === pokemon.id)); // retourne le meme pokemon, mais on va le chercher ds notre cst de pokemon
    }); 
  }
  

   //Method update pokemon permet de push ls modif°
  //apporter sr le pokemon passer en param vrs notre API REST
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT', //def du type de req
        body: JSON.stringify(pokemon), /*2eme param a la METHOD FETCH.
        Pr Transmettr ls data du pok vrs le reseau, on encode ts ça ds une str
        grace à la METHOD 'JSON.stringify', method JS nativ. Elle transf un {} en string 
        Preciser quelle genre de data send to API RESt, elle aura du JSON*/
        headers: { 'Content-Type': 'application/json'}
        // Entete pour preciser quelle genre de data send to API RESt, data de type 'JSON'
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {
      const { id } = pokemon;
      const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
      this.pokemons[index] = pokemon;
      resolve(pokemon);
    }); 
  }
  
  //Effacer un pok
  static deletePokemon(pokemon: Pokemon): Promise<{}> {//retourne un obj vide
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const { id } = pokemon;
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
      resolve({});
    }); 
  }
  
  //ajouter un pok
  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    pokemon.created = new Date(pokemon.created); //suppr la propr d'un pok

  
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      this.pokemons.push(pokemon);
      resolve(pokemon);
    }); 
  }
  
  //Method search
  static searchPokemon(term: string): Promise<Pokemon[]> {//retourne une promess qui renvoi un arr de Pokemon
    if(this.isDev) { /*Method Fetch, utilisat° d'une url special qui permet de filter ls Pokemons
    d'apres lr nom en fct d'un terme de recherche entré pr le user*/
      return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const results = this.pokemons.filter(pokemon => pokemon.name.includes(term));
      resolve(results);
    });
  
  }
  
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  
  static handleError(error: Error): void { //lié au catch() eventuelle err de req http ds notre appli
    console.error(error); //affiche l'err ds la console
  }
}

/*Method static: propre à la POO en general
(Method non rattaché aux instance de notre class
mais à la class elle meme!)*/

/*Methode traditionnelle:
const service = new PokemonService();on recupe notre service
const pokemonsPromise = service.getPokemons();on recupe la promesse
pokemonsPromise.then(pokemons => console.info(pokemons));on affiche
Methode static : 
PokemonsService.getPokemons().then(pokemons => console.info(pokemons));*/