import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
 
//component vaut PokemonList et rest vaut /
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => { //render : comportement de rendu de cette route
    const isAuthenticated = AuthenticationService.isAuthenticated; //demande au service si un user connect actuellemnt
    if (!isAuthenticated) {    
      return <Redirect to={{ pathname: '/login' }} /> //on redirige le user vers la page de connexion s'il n'est pas connect et de s'authentifier...
    }
  
    return <Component {...props} /> //si user connect, il est re-diriger vers le composant souhaité (listes des pokemon par ex)
  }} />
);
  
export default PrivateRoute;