import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})

export class DetailPokemonComponent implements OnInit {
  //VARIABLES
  pokemonsList: Pokemon[];
  pokemonPris: Pokemon|undefined;

  constructor(
    private maRoute: ActivatedRoute,
    private monRouter: Router,
    private monServicePokemon: PokemonService
  ) { }
  
  ngOnInit() {
    const pokemonIdDansURL: string | null = this.maRoute.snapshot.paramMap.get('monIdDePath');
    if (pokemonIdDansURL) {
      this.monServicePokemon.getPokemonByID(+pokemonIdDansURL)
        .subscribe(pokemonDuServeur => this.pokemonPris = pokemonDuServeur); 
    }
  }

  //METHODES
  deletePokemon(pokemonSupprimer: Pokemon) {
    this.monServicePokemon.deletePokemonById(pokemonSupprimer.id)
      .subscribe(() => this.goToPokemonList());
  }

    //NAVIGATION
  goToPokemonList() {
    this.monRouter.navigate(['/pokemons']);
  }
  goToEditPokemon(lePokemonSelec : Pokemon) {
    this.monRouter.navigate(['/edit/pokemon/'+lePokemonSelec.id]);
  }
  

  
}
