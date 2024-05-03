import { Component, OnInit } from '@angular/core'; // Importa las clases necesarias para crear un componente y usar OnInit

import { Hero } from '../hero'; // Importa la interfaz Hero
import { HeroService } from '../hero.service'; // Importa el servicio para obtener héroes

@Component({
  selector: 'app-heroes', // Nombre para usar este componente en el HTML
  templateUrl: './heroes.component.html', // Ruta de la plantilla HTML para este componente
  styleUrls: ['./heroes.component.css'], // Ruta de los estilos CSS para este componente
})
export class HeroesComponent implements OnInit { // Implementa OnInit para acciones al inicializar el componente
  heroes: Hero[] = []; // Declara un array para almacenar la lista de héroes

  constructor(private heroService: HeroService) { } // Inyecta HeroService para obtener datos de héroes

  ngOnInit(): void { // Se ejecuta cuando el componente se inicializa
    this.getHeroes(); // Llama a getHeroes para obtener la lista de héroes
  }

  getHeroes(): void { // Método para obtener la lista de héroes del servicio
    this.heroService.getHeroes() // Llama al servicio para obtener héroes
      .subscribe(heroes => this.heroes = heroes); // Suscribe y asigna la lista de héroes
  }
}
