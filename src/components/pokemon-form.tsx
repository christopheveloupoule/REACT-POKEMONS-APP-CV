import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();
  
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const fieldName: string = e.target.name; /* nm du chp  à modifier*/ 
      const fieldValue: string = e.target.value; /*Valeur saisie par le user*/ 
      const newField: Field = { [fieldName]: { value: fieldValue } }; //regroupement des nouvelles valeurs saisies

    setForm({ ...form, ...newField});
    }
/*on modifie l'etat de notre formulaire grace à la méthode 'setForm' fournit pr le hookState
spread operator pr fusionner 2 objets, nouvelle donnée 'newField' ecrase la précédente*/

/*MAJ de notre STATE lorsque le USER va cocher/decocher la case 
lors de l'interaction avec un type de pokemon*/
    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
      const checked = e.target.checked; //case cocher/decocher
      let newField: Field;

      if(checked) {
        // Si l'utilisateur coche un type, on l'ajoute à la liste des types du pokémon.
        const newTypes: string[] = form.types.value.concat([type]); //method concat permet de fusionner 2 arr
        newField = { value: newTypes };
      } else {
        // Si l'utilisateur décoche un type, on le retire de la liste des types du pokémon.
        const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type); 
        //method filter renvoi un nveau arr sans le type qui a ete decocher
        newField = { value: newTypes };
      }

      setForm({...form, ...{ types: newField }}); //Maj du STATE de notre form via le sread operator
    }

  //Mehod 'handleSubmit' chargé de gerer le comportement de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //bloquement natif afin de traiter ns meme la soumission du formulaire 
    console.log(form); //affiche les données dans le state du formulaire ds la console du navigateur
    history.push(`/pokemons/${pokemon.id}`); 
    //Enfin on redirige le user vers la page de detail d'un pokemon*/  
    /*history.push(`/pokemons/${pokemon.id}`);*/
    }

        

  return ( //Utilisation de materialize (classeName)
    <form onSubmit={(e) => handleSubmit(e)}>
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
                  <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
{/*On itère sr ls types de pokémon afin d'afficher une list de case à cocher, chacune associer avec un type précis
*Ajout de l'attribut "checked" et "value" pr determiner la valeur associer à chaque case à cocher cad le type de pokemon 
onChange={e => selectType(type, e)} : selectType, on passe 2param, le type avec lequel le user interagit et le 2nd param (e) si le user a coché/décoché*/}
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