import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCurriculoComponent } from './componentes/pagina-curriculo/pagina-curriculo.component';
import { PaginaSobreMimComponent } from './componentes/pagina-sobre-mim/pagina-sobre-mim.component';

const routes: Routes = [

  {path: 'curriculo', component: PaginaCurriculoComponent},
  {path:'sobreMim', component: PaginaSobreMimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
