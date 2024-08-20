import { Component, OnInit } from '@angular/core';
import { ProjetosService, Projeto } from './projetos.service';
@Component({
  selector: 'app-projeto-listar',
  templateUrl: './projeto-listar.component.html',
  styleUrls: ['./projeto-listar.component.css']
})
export class ProjetoListarComponent implements OnInit {

  projects: Projeto[] = [];

  constructor(private projetosService: ProjetosService) { }

  ngOnInit(): void {
    this.projetosService.getProjetos().subscribe((data: Projeto[]) => {
      this.projects = data;
    });
  }
}