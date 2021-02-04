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
29/Modifie du file pokemon-detail (via un bouton 'crayon' et donc d'eviter de taper l'url)
30/
31/
32/
33/
34/
35/



