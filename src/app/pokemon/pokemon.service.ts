import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
  //VARIABLES

  constructor(private monClientHttp: HttpClient) { }

  //METHODES
    //LES OBSERVABLES
      /*
      Note : urlPokemonAPI est déclarée dans In-Memory-Data-Service.ts et permet d'aller chercher la liste 
      pokemon sur notre serveur local.
      */
  getPokemonList(): Observable<Pokemon[]>{
    return this.monClientHttp.get<Pokemon[]>('api/urlPokemonAPI').pipe(  
      tap((laPokemonListDeReponse) => this.log(laPokemonListDeReponse)),
      catchError((error) => this.logErr(error, []))
    );
  }

  getPokemonByID(pokemonID: number): Observable<Pokemon|undefined> {
      return this.monClientHttp.get<Pokemon>(`api/urlPokemonAPI/${pokemonID}`).pipe(
        tap((lePokemonDeReponse) => this.log(lePokemonDeReponse)),
        catchError((error) => this.logErr(error, undefined))
      );
  }

  updatePokemon(pokemonUpdated: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //Time code 6:50:30 => Je ne respecte pas le code du tutoriel pour le "return" ci-dessous.
    //Typer le "put" avec <Pokemon> règle le pb car on observe, reçoit et modifit des objets "Pokemons".
    //Je ne comprend pas pourquoi Simon à fait autrement dans la vidéo.
    return this.monClientHttp.put<Pokemon>('api/urlPokemonAPI', pokemonUpdated, httpOptions).pipe(
      tap((lePokemonDeReponse) => this.log(lePokemonDeReponse)),
      catchError((error) => this.logErr(error, undefined))
    );
  } 

  deletePokemonById(pokemonDeletedId: number) : Observable<Pokemon> {
    return this.monClientHttp.delete<Pokemon>(`api/urlPokemonAPI/${pokemonDeletedId}`).pipe(
      tap((lePokemonDeReponse) => this.log(lePokemonDeReponse)),
      catchError((error) => this.logErr(error, undefined))
    );
  }

  Addpokemon(pokemonAdded: Pokemon) : Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.monClientHttp.post<Pokemon>('api/urlPokemonAPI', pokemonAdded, httpOptions).pipe(
      tap((lePokemonDeReponse) => this.log(lePokemonDeReponse)),
      catchError((error) => this.logErr(error, undefined))
    );
  }

  searchPokemon(term: string): Observable<Pokemon[]>{
    if(term.length>1){
      return this.monClientHttp.get<Pokemon[]>(`api/urlPokemonAPI/?name=${term}`).pipe(
        tap((lePokemonDeReponse) => this.log(lePokemonDeReponse)),
        catchError((error) => this.logErr(error, []))
      );
    } else {
      return of([]);
    }
  }
  
  private log(maReponse: Pokemon[] | Pokemon | undefined) {
    console.table(maReponse);
  }
  private logErr(monErr: Error, errorValue: any) {
    console.error(monErr);
    return of(errorValue);
  }

  getPokemonTypeList(): string[]{
    return [
      'Eau',
      'Feu',
      'Plante',
      'Normal',
      'Vol',
      'Poison',
      'Insecte',
      'Fée',
      'Electrik',
      'Combat',
      'Psy'
    ];
  }

}

