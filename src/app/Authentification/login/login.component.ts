import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit{
  //VARIABLES
  message: string = 'Vous êtes déconnecté (pikachu / pikachu).';
  name: string;
  password: string;
  auth: AuthService

  constructor(
    protected monAuth: AuthService,
    private monRouter: Router
  ) { }
  
  ngOnInit(): void {
    this.auth= this.monAuth
  }

  //METHODES
  setMessage() {
    if (this.auth.isLoggedIn) { 
      this.message='Vous êtes connecté.'
    } else {
      this.message='Identifiant ou mot de passe incorrect (pikachu / pikachu)'
    }
  }

  login() {
    this.message = 'Tentative de connexion...'
    this.auth.logIn(this.name, this.password)
      .subscribe((Connection: boolean) => {
        this.setMessage();
        if (Connection) {
          this.monRouter.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.monRouter.navigate(['/login']);
        }
      });
  }

  logout() {
    this.auth.logOut;
    this.message = 'Vous êtes déconnecté (pikachu / pikachu).'
  }
  
}
