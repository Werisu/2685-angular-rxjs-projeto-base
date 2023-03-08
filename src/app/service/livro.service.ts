import { LivrosResultado } from './../models/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  loading = false;

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string): Observable<LivrosResultado> {
    this.loading = true;
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      finalize(() => this.loading = false)
    )
  }
}
