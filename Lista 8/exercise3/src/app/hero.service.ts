import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application-json'})
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
          .pipe(
            tap(_ => this.log("fetched heroes")),
             catchError(this.handleError<Hero[]>('getHeroes', []))
          ); //using http
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
          .pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
             catchError(this.handleError<Hero>(`getHero id=${id}`))
          );
    //this.messageService.add(`HeroService fetched hero id=${id}`);
    //return of(HEROES.find(hero => hero.id === id));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
          .pipe(
            tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
          );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
          .pipe(
            tap((newHero : Hero) => this.log(`added hero with id=${newHero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
          );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    //check if the param type is number, if not, access the object hero and get the id
    const id = (typeof hero === 'number') ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions)
          .pipe(
            tap(_ => this.log(`deleted hero with id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
          );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }
    const url = `${this.heroesUrl}/?name=${term}`;

    return this.http.get<Hero[]>(url)
          .pipe(
            tap(_ => this.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
          );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  constructor(
    public messageService: MessageService,
    public http: HttpClient
  ) { }
}
