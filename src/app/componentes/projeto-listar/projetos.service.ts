import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

export interface Projeto {
  name: string;
  tools: string;
  image: string;
  url: string;
}

export interface ProjetoResponse {
  projetos: Projeto[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private jsonUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  getProjetos(): Observable<Projeto[]> {
    return this.http.get<ProjetoResponse>(this.jsonUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar projetos:', error);
        throw error; // Re-throw the error
      }),
      map(response => response.projetos) // Acessa a chave `projetos`
    );
  }
}
