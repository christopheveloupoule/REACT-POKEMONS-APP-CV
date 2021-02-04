import Pokemon from "../models/pokemon";
 
export default class PokemonService {

//ajout de la req qui permet de recup ts les pok ds la methode getPokemons()
// la method retourne le resultat del aMETHO fetch qui est une prommess contenant un []
//de pokemons d'ou le type Promise<Pokemon[]>
  static getPokemons(): Promise<Pokemon[]> { 
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json());
  }
 
  static getPokemon(id: number): Promise<Pokemon|null> { //renvoi soit une pok ou une val null (| en tp)
    return fetch(`http://localhost:3001/pokemons/${id}`) //recupe un seul pok via son id 
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data) //METHOD isEmpty
  }
 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
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