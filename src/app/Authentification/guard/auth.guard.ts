/*
Note :
Pour cette partie concercant les guards, angular a changé et le code du tutoriel n'est plus valide,
suite à la MAJ de la v16.
J'ai donc essayé de reproduire le résultat de Simon sans son code exact.
*/

import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const monRouter: Router = inject(Router);

  return inject(AuthService).isLoggedIn
    ? true
    : monRouter.navigate(['/login']);
};

