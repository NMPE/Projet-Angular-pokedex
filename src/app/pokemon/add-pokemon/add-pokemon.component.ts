import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [lePokemonSelec]="nouveauPokemon"></app-pokemon-form>
  `,
})
export class AddPokemonComponent implements OnInit {
  //VARIABLES
  nouveauPokemon: Pokemon;

  ngOnInit(){
    this.nouveauPokemon = new Pokemon();
  }

  //METHODES
}
