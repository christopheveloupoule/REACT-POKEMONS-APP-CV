import React, { FunctionComponent/*, useState, useEffect*/} from 'react';
//import Pokemon from './models/pokemon';
//import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
  
const App: FunctionComponent = () => {/*{ //def a state
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    

useEffect(() => { //life cycle
    setPokemons(POKEMONS);
}, []);*/


 return ( //Virtual DOM - utilisation de materialise (css)
  /*<PokemonList />*/
   <Router>
      <div>
          {/*La barre de nav commun à ttes ls pages*/}
        <nav> 
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div> 
        </nav>
          {/*Le syst de gest° ds routes de notre appli*/}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound} /> {/*attention à l'ordre de declaration ds routes*/} 
        </Switch>
      </div>
    </Router>
 )
}
  
export default App;