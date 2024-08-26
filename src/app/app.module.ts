import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    NavBarComponent,
  ]
})
export class AppModule { }
