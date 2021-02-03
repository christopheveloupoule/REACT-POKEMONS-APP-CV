export default class Pokemon { //class qui représente un pokemon ds notre appli
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    hp: number; //pts de vie 
    cp: number; //pt de degats
    name: string; //nom du pok
    picture: string; //url d'une image
    types: Array<string>; //un type , eau , feu...
    created: Date; //date de création de ce pok
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     hp: number = 100,
     cp: number = 10,
     name: string = '...',
     picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
     types: Array<string> = ['Normal'],
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.hp = hp;
     this.cp = cp;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }