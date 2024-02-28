import { Component, Input, OnInit, makeEnvironmentProviders } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  //VARIABLES
  maTypeList: string[];
  isAddForm: boolean;
  @Input() lePokemonSelec: Pokemon;

  constructor(
    private monPokemonService: PokemonService,
    private monRouter: Router
  ) { }

  ngOnInit() {
    this.maTypeList = this.monPokemonService.getPokemonTypeList();
    this.isAddForm = this.monRouter.url.includes('add');
  }

  //METHODES 
  hasType(type : string): boolean {    
    return this.lePokemonSelec.types.includes(type);
  }

  selectType($monEvent: Event, type: string) {
    const isChecked: boolean = ($monEvent.target as HTMLInputElement).checked;
    if (isChecked) {
      this.lePokemonSelec.types.push(type);
    } else {
      const index = this.lePokemonSelec.types.indexOf(type);
      this.lePokemonSelec.types.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.monPokemonService.Addpokemon(this.lePokemonSelec)
        .subscribe((nouveauPokemon) => this.monRouter.navigate(['/pokemon/' + nouveauPokemon.id]));
    } else {
      this.monPokemonService.updatePokemon(this.lePokemonSelec)
        .subscribe(() => this.monRouter.navigate(['/pokemon/' + this.lePokemonSelec.id]));  
    }
  }

  isTypesValid(type : string): boolean {
    if (this.lePokemonSelec.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.lePokemonSelec.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  /*NAVIGATION
  goToPokemonDetail(pokemonSelection: Pokemon) {
    this.monRouter.navigate(['/pokemon/'+pokemonSelection.id]);
  }
  */
}
