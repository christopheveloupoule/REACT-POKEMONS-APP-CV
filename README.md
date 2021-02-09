# REACT-POKEMONS-APP-CV
Application de POKEMONS côté Front-end:

https://pokedex-cv.netlify.app/ 
Please enter id : pikachu
            pwd : pikachu


*TypeScript : Typage de variables
Langage de prog libre et open source qui a pr but d'améliorer et de securiser la production de code JS (evite le code spaghetti).
TS est un suremsemble de JS. TS est transcompilé en JS pr pouvoir etre interprété pr n'importe quel navigateur web
Ex: var pointDeVie: number = 100;
var surnom: string = 'Green Lantern';
cde: npm install -g typescript (tsconfig.json)

****************************************************************************************************************
Premiers pas avec REACT
****************************************************************************************************************
0/Creation de notre dossier REACT-POKEMONS-APP-CV (on part d'un dossier vide)
1/Mise en place du Package.json (decrire le project - lister les dependances)
cde : npm init (on renseigne les champs)
on change le script "start": "node app.js" (app.js sera notre 1er pt d'entrée)
Execution de la cde ds le terminal : npm run start
1bis/commande 'npm install' qui va créer le dossier node_modules qui contient tte ls dependance pr faire fct notre projet
Création 'src' à la racine du projet | Création de 'App.tsx' ds le 'src' puis 'index.html' (pas de code JS, juste un pt d'entrée pr notre appli) dans le folder 'public'
creation du tsconfig.json
2/Installation Express: npm install express --save
3/Mise en place d'un place d'un point de terminaison ds le App.js
4/Utilisation de nodemon (pr eviter de couper et relancer la meme cde)
cde : npm install nodemon --save-dev
puis npm run start ou nodemon app.js
*****************************************************************************************************************
Ls composants
*****************************************************************************************************************
5/Composant fonction(pas de dep ext, +performant, +concis et +lisible)
composant classe (state et gestion du cycle de vie)
Hooks (state & cycle de vie) dans un compsant fct sans avoir à écrire de classes
useState :
State : valeur qui peut chger ds le tps
models/pokemon.ts (class Pokemon) on va typer les données représentant un pok
models/mock-pokemon.ts : contient ls données de pls pokemons avec la cst POKEMONS
6/Life cycle (composant class), on utilisera le "Hook d'effet" à la place!; syntaxe plus concise, on évite ls err
Regles sr les hooks: Apeller les hooks uniquement au niveau de la racine (pas ds ls loops, ni ds ls condit°...) /
tjs appeler depuis un composant de fct REACT /kook useState, en 2eme arg une METHOD permettant de modifier le State
du composant (setPokemons)
*****************************************************************************************************************
DOM virtuel avec JSX
*****************************************************************************************************************
7/évenements: en camelCase
Afficher une liste (de pokemon) : Methode native de JS "map"
Ajout du CSS de "Materialize" pour ajouter du style (dans index.html(link rel="stylesheet"...))
*****************************************************************************************************************
Props 
*****************************************************************************************************************
8/(Moyen le plus simple de faire communiquer les composants entre eux pr qu'il travaille en enssemble)
On peut passer une ou pls "Props"(composant parents) à pls composants(enfants).
Intérêt: Mieux découper notre appli en pls petits composant et plus autonomes(pour ne pas mettre tt le code de l'appli dans le composant)
*****************************************************************************************************************
Hooks
*****************************************************************************************************************
9/Proprietés calculées : Exemple affichage de date + lisible
Ex: const formatDate = (date: Date= new Date()): string => {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    
    const formatType...
format-date.ts et format-type.ts seront donc facto pr les re-use dans d'autre composant (et ainsi eviter la duplication de code)

10/Hooks personnalisés: commence par use (ex : useSate / useEffect...)

Conclusion : Avantages de def ds comportements communs à un seul endroit et que le code devient plus maintenable pr la suite
*****************************************************************************************************************
Routes
******************************************************************************************************************
11/Navigation via react router dom
12/La navigation via le fichier App.tsx pr une gestion plus dynamique
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
13/On va utiliser 'useHistory' pour la re-direcetion vers la page d'un pokemon (et non un link)
Via le  useHistory, Déplacé la logique de mon code vers mon composant plutot que ds le DOM virtuel
14/Gerer ls erreurs 404: Si un user n'arriverait pas à accéder à une page de nav...
(pages/page-not-found.tsx et import dans le 'App.tsx pr intercepter tts les routes non trouvés (mauvais url...))
*******************************************************************************************************************
FORMULAIRES 
******************************************************************************************************************
Intro: (composant controlé(gerer un composant REACT ds son State) ou nn controlé(gerer pr le DOM))
Notre formulaire d'edition avc les propietes d'un pok (name/hp/cp/types)
url :/pokemons/edit/7 via pokemon-edit.tsx | puis le composant controlé pr implémenter le "formulaire" en tant que tel

15/components/pokemon-form.tsx (utilisation du Css materialize via HTML) page du formulaire statique, juste de l'affichage
On va dc rendre ce formulaire fonctionnel et commencer par le relier au reste de notre appli
16/Puis on va l'intégrer à un autre composant de page : pokemon-edit.tsx
17/Ajout d'une nvelle route dans le App.tsx
18/Modifie du file pokemon-detail (ajout d'un bouton 'crayon' et donc d'eviter de taper l'url)
19/Sur le formulaire edition : initialiser un state pr notre formulaire representant les differents champs avec les donnees du pokemon concerné puis pousser ces diff valeur ds le formulaire
20/Combinaison de ces 2 types permettra de structurer le state utiliser pr notre 'form' d'edition
21/on cree un state pour modeliser les données qui vt etre gerer pr le form d'edition
22/Données préremplie dans le formulaire d'edition
23/Modife de l'etat du form en fct de l'interact° user (on a relié le state au form, maintenant on doit relier le form au state des lors de modife de champs name/hp/cp/types)
handleInputChange | onChange dans le return (pokemon-form.tsx)
24/selectType if/else spread operator... (pokemon-form.ts)
25/Gerer la soumission du form (handleSubmit) (pokemon-form.tsx)
26/Ajouter des regles de validation (pokemon-form.ts): lors de la saisie du user sur ls différents field du pokemon, on sollicitera ls METHOD 'validateForm' et 'isTypesValid' pour s'assurer que le user n'entre pas n'importe quoi dans les champs (Expressions régulières)!
27/Prevenir le user en cas d'err par message d'err  (pokemon-form.tsx): données ds indications pr corriger sn err lors de la saisie champ
*************************************************************************************************************
Requete HTTP 
*************************************************************************************************************
28/Simuler une API REST (jusqu'a maintenant on exporte nos donnée via le file mock-pokemon)
on va utiliser une petite librairie 'JSON SERVER' qui ns permet de simuler une APIREST qui 
fonctionnera comme si ns utilisions un serveur distant
cde : 'npm install -g json-server'
29/On crée une mini db 'db.json' dans le folder models , les modifs seront save ds ce fichier!
API pas encore prete, il faut encore la demarrer pour à court terme ne plus utiliser le mock-pockemon.ts
NB: On modifie le fichier format-date.ts , on lui passe new Date car le fichier db.JSON est statique
30/Demarrage de notre API REST : json-server --watch src/models/db.json --port=3001
cde a 2 param watch(indique l'emplacement de notre fichier qui sert de db dans notre cas le db.json)
 & port (sur lequel on veut demarrer notre api rest 3001 ds notre cas, react utilise deja le port 3000)
31/On met en place ds le package.json un raccourci de cde au niveau du script
"start:api": "json-server --watch src/models/db.json --port=3001 --delay=500"
Ex: localhost:3001/pokemons/1 retourne Bulbizzare du côté server (simple {}json composé de paire clé:valeur), avc ces simples info, on pourra construire une interface pr nos users
On execute la cde npm run start:api
*******************************************************************************************************************
Desormais démarrer nottre appli: npm start et notre APIRest: npm run start:api 
*******************************************************************************************************************
32/Consommer l'API REST sur notre machine local, maintenant il ns faut utiliser ts cela depuis notre appli
On va dc recupérer les Pokemons affiché ds notre appli depuis un SERVER distant plutot que depuis une simple cst (mock-pockemon.ts)
Fetch API, supporté pr ls navigateurs & JS..., cette METHOD global renvoie une promess qui facilite ls traitemnts async, envoie de requete de maniere Async
METHOD FETCH sur ls files pokemon-list.tsx / pokemon-detail.tsx (id dans l'url) / pokemon-edit.tsx(id dans l'url) pr recupe ls datas depuis l'api rest
33/Facto ns req ds un service: meme req dans pokemon-detail / pokemon-edit !!!
service/pokemon-service.ts chargé d'effectuer les 'req' reseaux vers notre APIRest
34/service/pokemon-service.ts : on a facto ns 2 req (getPokemons et utilisation fetch METHOD)
On utilise static puis il faudra brancher nos composants précedent 
pokemon-list / pokemon-detail / pokemon-edit sr ce pokemon-service.ts 
35/Gerer ls error : si la req n'aboutit pas alors utilisat° de la METHOD catch()
qui est une methode ds promess retourner par fetch
Grace à la METHOD catch(), on pourra intercepter les err succeptible d'intervenir ds notre application
36/BRANCHER NOTRE FORMULAIRE EDITION A NOTRE APIREST : 
*Modifier un pok (put) : nouvelle meth d'ou nvelle req http ds notre 'pokemon-service.ts'
Pr info, chaque req http, contient une 'method,un body,un headers'
*Save les modif du user:
Dès le handleSubmit du form 'pokemon-form.tsx', on effectuera la redirection (isFormValide)
MAJ du db.json
*Supprimer un pok : METHOD Delete tjs ds method service/pokemon-service.ts puis MAJ du db.json,
puis on implemente une METHOD delete from pokemon ds pokemon-form.tsx
*Ajouter un pokemon: METHOD POST, 
Ajouter une METHODE sr l'API REST pokemon-service.tsx - Creer une page pr l'ajout d'un pokemon (pokemon-form + route du pok App.tsx) - Ajouter un lien vrs cette page (pokemon-list.tsx) - distinguer le cas d'ajout et edition (pokemon-edit.tsx) - adapter le formulaire d'édition (capable de traiter le cas d'ajout et edition d'un pok) pokemon-form.tsx et pokemon.ts (image et name pre-rempli): ajout isEditForm ds type props et picture ds typeForm

Conclusion on peut meme developper des requetes avant d'avoir un server
**************************************************************************
Autocompletion
**************************************************************************
36/Creation de nvelle METHOD search POKEMON dans pokemon-service.ts: en taopant au minimum 2 lettre (METHOD searchPokemon)
37/Mise en place du composant de recherche pokemon-search.tsx pokemon-service.ts)
38/Affichage de notre champ de recherche, on rajoute le pokemon-search.tsx dans le template pokemon-list.tsx
39/On souhaite rajouter une icone de chargement (circulaire via materialize), rajout de delay=500" ds le package.json/
on crée le loader et on l'importe dans pokemon-detail.tsx également dans le pokemon-edit.tsx
**************************************************************************
Authentification
*************************************************************************
40/Mise en place de l'authentification (authentication-service.ts) assez minimaliste
41/Ajout de la page de connexion pour se logguer pages/login.tsx et import dans App.tsx
42/Proteger l'acces aux routes (PrivateRoute.tsx) et import ds App.tx
Conclusion: L'auth permet de restreindre l'accès à certaines fonctionnalités de notre appli
*************************************************************************
npm start (react port 3000) | npm run start:api (port 3001)







