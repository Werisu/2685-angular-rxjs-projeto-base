import { LivrosResultado, Item } from './../models/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      tap((v) => console.log('Fluxo do tap' ,v)),
      map((resultado) => resultado.items ?? []),
      tap((v) => console.log('Fluxo apos o map' ,v))
    );
  }
}
