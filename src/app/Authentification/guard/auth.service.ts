import { Injectable } from '@angular/core';

import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //VARIABLES
  isLoggedIn: boolean = false;
  redirectUrl: string;

  //METHODES
  logIn(nom: string, mdp: string): Observable<boolean> {
    const isLoggedIn = (nom == 'pikachu' && mdp == 'pikachu');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(monLog => this.isLoggedIn = monLog)
    );
  }

  logOut() {
    this.isLoggedIn = false;
  }

}
