import { Component, OnInit } from '@angular/core'; // Importa clases para crear un componente y usar OnInit
import { ActivatedRoute } from '@angular/router'; // Importa para obtener parámetros de la ruta
import { Location } from '@angular/common'; // Importa para manejar la navegación de regreso

import { Hero } from '../hero'; // Importa la interfaz Hero
import { HeroService } from '../hero.service'; // Importa el servicio para obtener datos de héroes

@Component({
  selector: 'app-hero-detail', // Nombre para referenciar el componente en el HTML
  templateUrl: './hero-detail.component.html', // Ruta del archivo HTML para la plantilla del componente
  styleUrls: [ './hero-detail.component.css' ] // Ruta del archivo CSS para el componente
})
export class HeroDetailComponent implements OnInit { // Implementa OnInit para manejar la inicialización
  hero: Hero | undefined; // Declara una propiedad para almacenar el héroe a mostrar

  constructor(
    private route: ActivatedRoute, // Inyecta ActivatedRoute para obtener parámetros de la ruta
    private heroService: HeroService, // Inyecta HeroService para obtener datos de héroes
    private location: Location // Inyecta Location para navegación de regreso
  ) {}

  ngOnInit(): void { // Método que se ejecuta cuando el componente se inicializa
    this.getHero(); // Llama a getHero para obtener el héroe basado en el ID de la ruta
  }

  getHero(): void { // Método para obtener el héroe por ID
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del héroe de la ruta
    this.heroService.getHero(id) // Llama al servicio para obtener el héroe
      .subscribe(hero => this.hero = hero); // Asigna el héroe a la propiedad
  }

  goBack(): void { // Método para regresar a la ubicación anterior
    this.location.back(); // Llama a 'back' para navegar hacia atrás
  }
}
