import { Component, HostListener, Renderer2 } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  /* navbarHidden = false; // Inicialmente a navbar não está oculta

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
  } */
}