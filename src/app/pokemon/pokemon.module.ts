import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { authGuard } from '../Authentification/guard/auth.guard';

const mesRoutesPokemon: Routes = [
  { path: 'edit/pokemon/:monIdDePath', component: EditPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemon/:monIdDePath', component: DetailPokemonComponent, canActivate: [authGuard] },
];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent, 
    AddPokemonComponent,
    SearchPokemonComponent,
    PageLoaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mesRoutesPokemon)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
