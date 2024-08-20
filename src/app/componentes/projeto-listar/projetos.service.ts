import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Projeto {
  name: string;
  tools: string;
  image: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private jsonUrl = 'http://localhost:3000/projetos';

  constructor(private http: HttpClient) { }

  getProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.jsonUrl);
  }
}
