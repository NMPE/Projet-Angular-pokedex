import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat" style="margin-bottom: 3cm;">
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {

}
