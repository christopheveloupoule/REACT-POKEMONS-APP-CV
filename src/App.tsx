import React, { FunctionComponent, useState, useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => { //def a state
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    

useEffect(() => { //life cycle
    setPokemons(POKEMONS);
}, []);


 return ( //Virtual DOM - utilisation de materialise (css)
  <div>
    <h1 className="center">Pokédex</h1>
    <div className="container"> 
      <div className="row"> 
      {pokemons.map(({id, name, picture, created}) => (
        <div className="col s6 m4" key={id}>
        <div className="card horizontal">
          <div className="card-image">
          <img src={picture} alt={name}/>
          </div>
          <div className="card-stacked">
          <div className="card-content">
            <p>{name}</p>
            <p><small>{created.toString()}</small></p>
          </div> 
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  </div>
 )
}
  
export default App;