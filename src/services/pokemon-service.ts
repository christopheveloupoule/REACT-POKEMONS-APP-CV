import Pokemon from "../models/pokemon";
 
export default class PokemonService {

//ajout de la req qui permet de recup ts les pok ds la methode getPokemons()
// la method retourne le resultat del aMETHO fetch qui est une prommess contenant un []
//de pokemons d'ou le type Promise<Pokemon[]>
  static getPokemons(): Promise<Pokemon[]> { 
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error)); //err eventuel de notre promess à notre handleError
  }
 
  static getPokemon(id: number): Promise<Pokemon|null> { //renvoi soit une pok ou une val null (| en tp)
    return fetch(`http://localhost:3001/pokemons/${id}`) //recupe un seul pok via son id 
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data) //METHOD isEmpty
      .catch(error => this.handleError(error)); //err eventuel de notre promess à notre handleError
  }

   //Method update pokemon permet de push ls modif°
  //apporter sr le pokemon passer en param vrs notre API REST
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
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