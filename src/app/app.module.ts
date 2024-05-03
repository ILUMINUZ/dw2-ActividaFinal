import { NgModule } from '@angular/core'; // Importa el decorador NgModule para definir módulos en Angular
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo para aplicaciones Angular que corren en el navegador
import { FormsModule } from '@angular/forms'; // Importa el módulo para trabajar con formularios y binding bidireccional

import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación
import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente del dashboard
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente para detalles de héroes
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente para la lista de héroes
import { MessagesComponent } from './messages/messages.component'; // Importa el componente para mensajes

import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento para la aplicación

@NgModule({
  // Los módulos que necesitas para esta aplicación
  imports: [
    BrowserModule, // Necesario para ejecutar la aplicación en el navegador
    FormsModule, // Para trabajar con formularios
    AppRoutingModule, // Para habilitar el enrutamiento y navegación
  ],
  // Componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AppComponent, // Componente principal de la aplicación
    DashboardComponent, // Componente para el dashboard
    HeroesComponent, // Componente para la lista de héroes
    HeroDetailComponent, // Componente para detalles de héroes
    MessagesComponent, // Componente para mostrar mensajes
  ],
  // El componente que inicia la aplicación
  bootstrap: [ AppComponent ] // Establece el componente raíz
})
export class AppModule { } // Exporta la clase del módulo principal
