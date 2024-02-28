import { style } from '@angular/animations';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})

  /*
  Note : Je ne respecte pas le code du tutoriel pour le composant ci-dessous.
  J'utilise ici une méthode de navigation "goToMenu" pour le bandeau "Pokédex",
  plutôt qu'un "href="#" " dans le template.
  La raison est le href réinitialise les données du serveur local à chaque utilisation, 
  et nous perdons alors les modifications faites sur notre page lors des tests.
  C'est juste du détails de personnalisation et de confort.
  */
export class AppComponent  {

  constructor(
    private monRouter: Router,
  ) { }

  //METHODES
    //NAVIGATION
  goToMenu() {
    this.monRouter.navigate(['/pokemons']);
  }

  
}

