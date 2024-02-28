import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

  
})
export class ListPokemonComponent implements OnInit {
  //VARIABLES
  pokemonsList: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  
  constructor(
    private monRouter: Router,
    private monServicePokemon: PokemonService
  ) { }

  ngOnInit(): void {
    console.table(this.pokemonsList);
    this.monServicePokemon.getPokemonList()
      .subscribe(listeDuServeur => this.pokemonsList = listeDuServeur)
  }
  
  //METHODES
  selectPokemon(pokemonID: number) {
    const monPokemon: Pokemon|undefined = this.pokemonsList.find(poke => poke.id == +pokemonID)
    if (monPokemon) {
      console.log(`(selectpokemon) Vous avez demandé le pokémon ${monPokemon.name}`);  
      this.pokemonSelected = monPokemon;
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas.`);  
      this.pokemonSelected = monPokemon;
    }
  }


  //NAVIGATION
  goToPokemonDetail(pokemonSelection: Pokemon) {
    this.monRouter.navigate(['/pokemon/'+pokemonSelection.id]);
  }

}
