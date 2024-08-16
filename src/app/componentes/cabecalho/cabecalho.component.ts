import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  navbarHidden = false; // Inicialmente a navbar não está oculta

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    if (scrollPosition > 100) {
      // Navbar deve estar oculta
      this.renderer.addClass(navbar, 'hidden');
      this.renderer.removeClass(navbar, 'visible');
    } else {
      // Navbar deve estar visível
      this.renderer.removeClass(navbar, 'hidden');
      this.renderer.addClass(navbar, 'visible');
    }
  }
}