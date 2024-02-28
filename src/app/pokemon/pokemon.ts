export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor( 
        hpConstructor: number= 10,
        cpConstructor: number= 10,
        nameConstructor: string = 'Entrer un nom',
        pictureConstructor: string ='http://assets.pokemon.com/assets/cms2/img/pokedex/full/xxx.png',
        typesConstructor: string[]= ['Normal'],
        createdConstructor: Date= new Date(),
    ) {
        this.hp = hpConstructor;
        this.cp = cpConstructor;
        this.name = nameConstructor;
        this.picture = pictureConstructor;
        this.types = typesConstructor;
        this.created = createdConstructor;
    }

    
}