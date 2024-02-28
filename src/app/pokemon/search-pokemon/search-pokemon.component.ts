import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  //VARIABLES
  searchTerms = new Subject<string>();
  pokemonsList$: Observable<Pokemon[]>;

  constructor(
    private monRouter: Router,
    private monServicePokemon: PokemonService
  ) {  }

  ngOnInit(): void {
    this.pokemonsList$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((monTermeFiltrer)=>this.monServicePokemon.searchPokemon(monTermeFiltrer))
    ); 
  }
  
  search(term: string) {
    this.searchTerms.next(term);
  }

  //NAVIGATION
  /*
    Note : je diffère légèrement du code du tutoriel pour la méthode ci-dessous.
    Le code originel est celui mis en commentaire. J'ai préféré garder la même struture
    que celle utiliée dans "list-pokemon.component.ts" vu que le but est le même.
  */
  goToPokemonDetail(recherchePokemon: Pokemon) {
    //const link = ['/pokemon', recherchePokemon.id]
    //this.monRouter.navigate(link);
    this.monRouter.navigate(['/pokemon/'+recherchePokemon.id]);
  }
}
