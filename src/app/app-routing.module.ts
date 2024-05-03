import { NgModule } from '@angular/core'; // Importa para definir un módulo Angular
import { RouterModule, Routes } from '@angular/router'; // Importa para trabajar con enrutamiento

import { DashboardComponent } from './dashboard/dashboard.component'; // Componente para el tablero
import { HeroesComponent } from './heroes/heroes.component'; // Componente para la lista de héroes
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Componente para detalles de héroes

// Define las rutas para la aplicación
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta raíz redirige al tablero
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el tablero
  { path: 'detail/:id', component: HeroDetailComponent }, // Ruta para detalles de héroes con ID dinámico
  { path: 'heroes', component: HeroesComponent } // Ruta para la lista de héroes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Configura el módulo de enrutamiento
  exports: [ RouterModule ] // Exporta el módulo para usarlo en otros módulos
})
export class AppRoutingModule {} // Declara y exporta el módulo de enrutamiento
