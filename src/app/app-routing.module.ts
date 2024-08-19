import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaSobreMimComponent } from './componentes/pagina-sobre-mim/pagina-sobre-mim.component';
import { PaginaProjetosComponent } from './componentes/pagina-projetos/pagina-projetos.component';
const routes: Routes = [

  {path:'sobreMim', component: PaginaSobreMimComponent},
  {path:'projetos', component: PaginaProjetosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
