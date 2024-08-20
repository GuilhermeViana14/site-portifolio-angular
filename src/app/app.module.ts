import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomeTextosComponent } from './componentes/home-textos/home-textos.component';
import { PaginaSobreMimComponent } from './componentes/pagina-sobre-mim/pagina-sobre-mim.component';
import { ProjetoListarComponent } from './componentes/projeto-listar/projeto-listar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeTextosComponent,
    PaginaSobreMimComponent,
    ProjetoListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
