import { Directive, ElementRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Directive({
  selector: '[pkmnBorderCard]', //les crochets servent à distinguer les directives des composants
})
  
export class BorderCardDirective {
  //VARIABLES
  protected initialColor: string = "#f5f5f5";
  protected defaultColor: string = "#009688";
  protected defaultHeight: number = 180;
  protected pokemonsList: Pokemon[] = POKEMONS;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  
  //METHODES
  setHeight(hauteur: number) {
    this.el.nativeElement.style.height = `${hauteur}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

  @Input('pkmnBorderCard') inputCartePokemon: number;

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    switch (this.pokemonsList[this.inputCartePokemon - 1].types[0]) {
      case 'Feu':
        this.setBorder("red");
        break;
      case 'Eau':
        this.setBorder("blue");
      break;
      case 'Plante':
        this.setBorder("green");
      break;
      case 'Fée':
        this.setBorder("pink");
      break;
      case 'Electrik':
        this.setBorder("yellow");
      break;
      case 'Poison':
        this.setBorder("magenta");
      break;
      case 'Normal':
        this.setBorder("grey");
      break;
      case 'Insecte':
        this.setBorder("saddlebrown");
      break;
      case 'Psy':
        this.setBorder("darkviolet");
      break;
      case 'Vol':
        this.setBorder("lightblue");
      break;
      case 'Combat':
        this.setBorder("orange");
      break;
    default :
      this.setBorder(this.defaultColor);
      break;
    } 
  }
}
