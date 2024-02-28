import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
/*
Note : InMemoryDataService est injecté dans notre module d'API dans app.module.ts.
Elle comporte la méthode createDb ci-dessous qui renvoi ce qu'on lui indique (urlPokemonAPI),
si on utilise un observable sur notre API
*/
  createDb() {
    const urlPokemonAPI = POKEMONS;
    return { urlPokemonAPI };
  }

  constructor() { }
}
