import { Component, OnInit } from '@angular/core'; // Importa para crear un componente y usar OnInit
import { Hero } from '../hero'; // Importa la interfaz Hero
import { HeroService } from '../hero.service'; // Importa el servicio para obtener héroes

@Component({
  selector: 'app-dashboard', // Nombre del selector para usar en plantillas
  templateUrl: './dashboard.component.html', // Ruta de la plantilla HTML para el componente
  styleUrls: [ './dashboard.component.css' ] // Ruta del archivo CSS para los estilos
})
export class DashboardComponent implements OnInit { // Implementa OnInit para acciones al inicializar
  heroes: Hero[] = []; // Declara un array para almacenar una lista de héroes

  constructor(private heroService: HeroService) { } // Inyecta el servicio de héroes

  ngOnInit(): void { // Se ejecuta al iniciar el componente
    this.getHeroes(); // Llama a getHeroes para obtener la lista de héroes
  }

  getHeroes(): void { // Método para obtener los héroes
    this.heroService.getHeroes() // Llama al servicio para obtener la lista completa de héroes
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Toma solo algunos héroes para mostrar en el dashboard
  }
}
