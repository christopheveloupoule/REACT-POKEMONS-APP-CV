# REACT-POKEMONS-APP-CV
Application de POKEMONS côté Front-end

1/Je pars d'un fichier vide pour créer mon dossier REACT
2/creation du package.json
3/creation du tsconfig.json
4/Installation-config de nodeJS (si jamais installé sur la machine)
5/npm install : install de tte les dependances via le folder node_modules
6/Creation du folder src et des files App.tsx & index.tsx
7/creation du fichier index.html (pt d'entree pr notre appli) dans le dossier 'public'
/////////////////////////////////////////////////////////////////////////////////////////
Découpage de nos fichier primordial pour mieux decouper notre code pr la mise en place 
de l'application de la bonne manière (pas de mélange de fichiers qui ont des roles differents)
/////////////////////////////////////////////////////////////////////////////////////////
Developpement plus avancé
///////////////////////////////////////////////////////////////////////////////////////////
8/Utilisation du useState dans App.txs
9/Creation d'un etat pr gerer le STATE (class tyscript pr modeliser un pokemon (pokemon.ts) & un fichier de donnée contenant qqs pokemons (mock-pokemon.ts) à injecter ds notre composant)
10/On  def une variable state / init state / type state (affiche le nbre de pokemon present ds le state du component) et affiché, il y  a 12 pokémons (useState)
11/Utilisation du useEffect au lieu d'utiliser les Methodes ds cycles de vie! 
Init le state avc un [] / load la liste POKEMON (mock-pokemon.ts) à l'initialisation
du composant / liste des pok load only one time
///////////////////////////////////////////////////////////////////////////////
12/ MATERIALIZE : On stylyse via 'MATERIALIZE' dans le index.html
///////////////////////////////////////////////////////////////////////////////
13/map : Afficher une liste de 12 pokemons (METHOD map()) via materialize
///////////////////////////////////////////////////////////////////////////////
14/PROPS : On va passer les 'props' decoupage de notre appli App => PokemonsList => PokemonCard (afficher le pokemon a propremment parlé !)
15/Creation du dossier component du file pokemon-card 
16/Creation du dossier pages du file pokemon-list 
17/Passage de props à pokemon-card
18/application de css a pokemon card (via les props egalement)
19/Affichage dynamique de la borderColor d'une card pokemon dans la liste
//////////////////////////////////////////////////////////////////////////////
HOOKS PERSONNALISES
/////////////////////////////////////////////////////////////////////////////
20/Hooks personnalisés (ex affichage de date...)
21/Rajout des methodes formatDate & formatType puis export
//////////////////////////////////////////////////////////////////////////////
NAVIGATION
/////////////////////////////////////////////////////////////////////////////
22/Navigation via react router dom
23/La navigation le fichier App.tsx
24/useHistory pour la redirecetion vers la page d'un pokemon (et non un link pour vr une seconde méthode)
25/Gerer ls erreurs 404 si un user n'arriverait pas à accéder à une page de nav...
(pages/page-not-found.tsx et App.tsx pr intercepter tts les routes non trouvés (mauvais url...))
///////////////////////////////////////////////////////////////////////////////
FORMULAIRES (composant controlé(gerer ds le state pr un composant REACT) ou nn controlé(gerer ds le DOM))
Formulaire d'edition avc les propietes d'un pok (name/hp/cp/types)
url :/pokemons/edit/7 | puis le composant controlé pr implémenter le "formulaire" en tant que tel
//////////////////////////////////////////////////////////////////////////////
26/components/pokemon-form.tsx page du formulaire statique
27/Puis on va l'intégrer à un autre composant pokemon-edit.tsx
28/Ajout d'une nvelle route dans le App.tsx
29/Modifie du file pokemon-detail (ajout d'un bouton 'crayon' et donc d'eviter de taper l'url)
30/Sur le formulaire edition : initialiser un state pr notre formulaire representant les diff
champs avec les donnees du pokemon concerné puis pousser ces diff valeur ds le formulaire
31/Combinaison de ces 2 types permettra de structurer le state utiliser pr notre 'form' d'edition
32/on cree un state pour modeliser les données qui vt etre gerer pr le form d'edition
33/Données préremplie dans le formulaire d'edition
34/Modife de l'etat du form en fct de l'interact° user (on a relié le state au form, maintenant on doit relier le form au state des lors de modife de champs name/hp/cp/types)
handleInputChange | onChange dans le return
35/selectType if/else spread operator...
36/Gerer la soumission du form (handleSubmit)
37/Ajouter des regles de validation lors de la saisie du user sur ls différents field du pokemon
(validateForm et isTypesValid)
38/Prevenir le user en cas d'erreur par message d'err...(poursuivre sur un serveur distant pr que ns donné soit pris en compte)
****************************************************************************
Requete HTTP npm install -g json-server (simule l'api REST)
****************************************************************************
39/Simuler une API REST (jusqu'a maintenant on exporte nos donnée via le file mock-pokemon)
on va utiliser une petite librairie 'JSON SERVER' qui ns permet de simuler une APIREST qui 
fonctionnera comme si ns utilisions un serveur distant
npm install -g json-server
40/On crée une mini db 'db.json' dans le folder models , les modifs seront save ds ce fichier!
API pas encore prete, il faut encore la demarrer pour à court terme ne plus utiliser le mock-pockemon.ts
On modifie le fichier format-date.ts , on lui passe new Date car le fichier db.JSON est statique
41/
42/
43/
44/
45/
46/
47/




