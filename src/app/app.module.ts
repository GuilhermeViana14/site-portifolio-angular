import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomeTextosComponent } from './componentes/home-textos/home-textos.component';
import { PaginaSobreMimComponent } from './componentes/pagina-sobre-mim/pagina-sobre-mim.component';
import { PaginaProjetosComponent } from './componentes/pagina-projetos/pagina-projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeTextosComponent,
    PaginaSobreMimComponent,
    PaginaProjetosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
