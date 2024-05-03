import { TestBed } from '@angular/core/testing'; // Importa las funciones necesarias para configurar pruebas en Angular

import { HeroService } from './hero.service'; // Importa el servicio que se va a probar

// Descripción de la prueba para el HeroService
describe('HeroService', () => {
  let service: HeroService; // Variable para almacenar la instancia del servicio

  // Antes de cada prueba, configura el entorno y crea una nueva instancia del servicio
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del entorno de pruebas
    service = TestBed.inject(HeroService); // Inyecta el servicio para probarlo
  });

  // Prueba para verificar que el servicio se crea correctamente
  it('should be created', () => {
    expect(service).toBeTruthy(); // La instancia del servicio debería ser válida (no nula ni indefinida)
  });
});
