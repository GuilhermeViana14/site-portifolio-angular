import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTextosComponent } from './componentes/home-textos/home-textos.component';
import { ProjetoListarComponent } from './componentes/projeto-listar/projeto-listar.component';
const routes: Routes = [

  { path: '', component: HomeTextosComponent },
  { path: 'projetos', component: ProjetoListarComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
