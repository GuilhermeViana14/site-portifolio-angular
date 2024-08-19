import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pagina-projetos',
  templateUrl: './pagina-projetos.component.html',
  styleUrls: ['./pagina-projetos.component.css']
})
export class PaginaProjetosComponent implements OnInit {
  projects: any[] = [];
  currentPage = 0;
  pageSize = 12; // Número de projetos por carregamento
  totalProjects = 12; // Total de projetos disponíveis
  isLoading = false;

  // Propriedades para configuração do Infinite Scroll
  scrollDistance = 1; // Distância do scroll para acionar o carregamento
  scrollUpDistance = 1; // Distância do scroll para acionar o carregamento quando rolar para cima
  throttle = 300; // Tempo em milissegundos para limitar a frequência do evento de scroll

  // Lista de nomes, ferramentas e URLs dos projetos
  projectNames = [
    'runner', 'Space Invader', 'Site', 'Project 4', 'Project 5', 
    'Project 6', 'Project 7', 'Project 8', 'Project 9', 'Project 10',
    // Adicione mais nomes conforme necessário
  ];

  toolsList = [
    'python', 'py game', 'angular', 'Tool G', 'Tool H',
    // Adicione mais ferramentas conforme necessário
  ];

  projectUrls = [
    'https://example.com/runner', 'https://example.com/space-invader', 'https://example.com/site', 
    'https://example.com/project4', 'https://example.com/project5', 
    'https://example.com/project6', 'https://example.com/project7', 
    'https://example.com/project8', 'https://example.com/project9', 
    'https://example.com/project10',
    // Adicione mais URLs conforme necessário
  ];

  constructor() {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    if (this.isLoading || this.currentPage * this.pageSize >= this.totalProjects) {
      return;
    }

    this.isLoading = true;

    // Simule uma chamada de API
    setTimeout(() => {
      const newProjects = Array.from({ length: this.pageSize }, (_, index) => {
        const projectIndex = this.currentPage * this.pageSize + index;
        return {
          name: this.projectNames[projectIndex] || `Project ${projectIndex + 1}`,
          tools: this.toolsList[projectIndex] || 'Tool A, Tool B',
          image: `../../../assets/imagens/project${this.currentPage * this.pageSize + index + 1}-imagem.jpg`,
          url: this.projectUrls[projectIndex] || '#'
        };
      });

      this.projects = [...this.projects, ...newProjects];
      this.currentPage++;
      this.isLoading = false;
    }, 1000); // Simulação de atraso
  }

  onScroll() {
    this.loadProjects();
  }
}