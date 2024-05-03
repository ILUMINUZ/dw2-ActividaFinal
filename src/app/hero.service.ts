import { Injectable } from '@angular/core'; // Importa el decorador Injectable para declarar un servicio de Angular
import { Observable, of } from 'rxjs'; // Importa Observable para manejar datos asíncronos y 'of' para crear Observables
import { Hero } from './hero'; // Importa la interfaz Hero
import { HEROES } from './mock-heroes'; // Importa datos simulados de héroes
import { MessageService } from './message.service'; // Importa un servicio para agregar mensajes

// El decorador @Injectable con { providedIn: 'root' } indica que el servicio está disponible en toda la aplicación
@Injectable({ providedIn: 'root' })
export class HeroService {

  // Inyecta el servicio MessageService a través del constructor para enviar mensajes
  constructor(private messageService: MessageService) { }

  // Método para obtener la lista de todos los héroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Crea un Observable con la lista de héroes simulados
    this.messageService.add('HeroService: héroes buscados'); // Añade un mensaje indicando que se han obtenido los héroes
    return heroes; // Retorna el Observable con la lista de héroes
  }

  // Método para obtener un héroe por su ID
  getHero(id: number): Observable<Hero> {
    // Por ahora, asumimos que siempre existe un héroe con el ID especificado.
    // El manejo de errores se agregará más adelante en el tutorial.
    const hero = HEROES.find(h => h.id === id)!; // Encuentra el héroe con el ID dado
    this.messageService.add(`HeroService: ID de héroe obtenida=${id}`); // Añade un mensaje con el ID del héroe obtenido
    return of(hero); // Retorna el Observable con el héroe encontrado
  }
}
