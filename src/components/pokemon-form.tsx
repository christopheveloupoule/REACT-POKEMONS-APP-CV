import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
  
type Props = {
  pokemon: Pokemon
};

//Declarer 2 nveaux types pr mieux modéliser ns formulaire:
//Formulaire saisi ds le champ si valide ou non
type Field = { //modelise un champ ds notre form
  value?: any,
  error?: string,
  isValid?: boolean
};

//formulaire à propremnt parler via les champs dispos
type Form = {
  name: Field,
  hp: Field,
  cp: Field,
  types: Field
}

//Combinaison de ces 2 types permettra de structurer le state utiliser pr notre 'form' d'edition
//on cree un state pour modeliser les données qui vt etre gerer pr le form d'edition
  
const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {

  const [form, setForm] = useState<Form>({ //données uniquemnt present ds le state
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true }
  });
  
  const types: string[] = [ //contain all free pokemon to display in a form
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];
  
/*Methode renvoi un simple 'boolean' permettant de savoir si le type
passé en paramètre appartient ou non à un pokemon
Methode JS native "includes" pr determiner si un type appartient
à un type de pokemon ou non, cette methode renvoi d'elle meme un booleen
puis application de la méthode pr cocher/decocher la case*/

     const hasType = (type: string): boolean => {
      return form.types.value.includes(type);
    }

  return ( //Utilisation de materialize (classeName)
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" className="form-control" value={form.name.value}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" type="number" className="form-control" value={form.hp.value}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" type="number" className="form-control" value={form.cp.value}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)} ></input>
{/*On itère sr ls types de pokémon afin d'afficher une list de case à cocher, chacune associer avec un type précis
*Ajout de l'attribut "checked" et "value" pr determiner la valeur associer à chaque case à cocher cad le type de pokemon */}
                        <span>
                          <p className={formatType(type)}>{ type }</p>
{/*via la METHOD formaType, affichage d'une petite bulle de couleur, le rendu sera + agreable pr le user*/}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default PokemonForm;