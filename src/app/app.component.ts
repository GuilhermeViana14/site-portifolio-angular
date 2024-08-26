import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./componentes/nav-bar/nav-bar.component";
import { IntroducaoComponent } from './componentes/introducao/introducao.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { CuriosidadesComponent } from "./componentes/curiosidades/curiosidades.component";
import { CurriculoComponent } from './componentes/curriculo/curriculo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, IntroducaoComponent, SobreMimComponent, CuriosidadesComponent, CurriculoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-2.0';


  gOnInit() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
