import React, { FunctionComponent/*, useState, useEffect*/} from 'react';
//import Pokemon from './models/pokemon';
//import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {/*{ //def a state
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    

useEffect(() => { //life cycle
    setPokemons(POKEMONS);
}, []);*/


 return ( //Virtual DOM - utilisation de materialise (css)
  <PokemonList />
 )
}
  
export default App;