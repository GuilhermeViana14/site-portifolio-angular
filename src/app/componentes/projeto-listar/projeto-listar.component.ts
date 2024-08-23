import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjetosService, Projeto } from './projetos.service';

@Component({
  selector: 'app-projeto-listar',
  templateUrl: './projeto-listar.component.html',
  styleUrls: ['./projeto-listar.component.css']
})
export class ProjetoListarComponent implements OnInit {
  projects: Projeto[] = [];
  @ViewChild('projectList', { static: true }) projectList: ElementRef | undefined;

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private sensitivity = 1.2; // Sensibilidade ajustada para melhorar a precisão

  constructor(private projetosService: ProjetosService) {}

  ngOnInit(): void {
    this.projetosService.getProjetos().subscribe(
      (data: Projeto[]) => {
        console.log('Dados recebidos:', data);  // Log dos dados recebidos
        this.projects = data;
      },
      error => {
        console.error('Erro ao buscar projetos:', error);  // Log de erro
      }
    );

    this.initializeDrag();
  }

  private initializeDrag(): void {
    const element = this.projectList?.nativeElement;

    if (element) {
      element.addEventListener('mousedown', (e: MouseEvent) => {
        this.isDragging = true;
        this.startX = e.pageX - element.getBoundingClientRect().left;
        this.scrollLeft = element.scrollLeft;
        element.style.cursor = 'grabbing'; // Muda o cursor para indicar o arrasto
      });

      element.addEventListener('mousemove', (e: MouseEvent) => {
        if (!this.isDragging) return;
        e.preventDefault();
        const x = e.pageX - element.getBoundingClientRect().left;
        const walk = (x - this.startX) * this.sensitivity; // Ajuste a sensibilidade conforme necessário

        element.scrollLeft = this.scrollLeft - walk;
      });

      element.addEventListener('mouseup', () => {
        this.isDragging = false;
        element.style.cursor = 'grab'; // Muda o cursor de volta para o padrão
      });

      element.addEventListener('mouseleave', () => {
        if (this.isDragging) {
          this.isDragging = false;
          element.style.cursor = 'grab'; // Muda o cursor de volta para o padrão
        }
      });
    }
  }
}
