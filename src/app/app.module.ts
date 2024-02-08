import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula6Component } from './aula6/aula6.component';
import { Aula7Component } from './aula7/aula7.component';
import { Aula8Component } from './aula8/aula8.component';
import { BoldPipe } from './bold.pipe';
import { ButtonComponent } from './button/button.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModelosComponent } from './modelos/modelos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';


import { DestaquesComponent } from './destaques/destaques.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    Aula6Component,
    Aula7Component,
    Aula8Component,
    FooterComponent,
    ButtonComponent,
    CaracteristicasComponent,
    CategoriasComponent,
    ModelosComponent,
    SearchResultsComponent,
    SearchBarComponent,
    BoldPipe,
    MenuComponent,
    DestaquesComponent,
    ServicosComponent,
    ResultadosComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
