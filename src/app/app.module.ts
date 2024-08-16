import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomeTextosComponent } from './componentes/home-textos/home-textos.component';
import { PaginaCurriculoComponent } from './componentes/pagina-curriculo/pagina-curriculo.component';
import { PaginaSobreMimComponent } from './componentes/pagina-sobre-mim/pagina-sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeTextosComponent,
    PaginaCurriculoComponent,
    PaginaSobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
