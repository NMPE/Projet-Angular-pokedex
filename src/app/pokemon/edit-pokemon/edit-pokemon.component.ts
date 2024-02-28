import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Editer {{pokemonPris?.name}} </h2>
    <p *ngIf="pokemonPris" class="center">
      <img [src]="pokemonPris.picture"> 
    </p>
    <app-pokemon-form *ngIf="pokemonPris" [lePokemonSelec]="pokemonPris"></app-pokemon-form>
  
  `,
  styles: []
})
export class EditPokemonComponent implements OnInit {
  
  pokemonPris: Pokemon|undefined;

  constructor(
    private monPokemonService: PokemonService,
    private maRoute: ActivatedRoute,
    private monRouter: Router
  ) { }
  
  ngOnInit(): void {
    const pokemonId: string | null = this.maRoute.snapshot.paramMap.get('monIdDePath');
    if (pokemonId) {
      this.monPokemonService.getPokemonByID(+pokemonId)
        .subscribe(pokemonDuServeur => this.pokemonPris = pokemonDuServeur);
    } else {
      this.pokemonPris = undefined;
    }
  }

}
