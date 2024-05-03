import { ComponentFixture, TestBed } from '@angular/core/testing'; // Herramientas para pruebas en Angular
import { MessagesComponent } from './messages.component'; // Componente a probar

describe('MessagesComponent', () => {
  let component: MessagesComponent; // Instancia del componente a probar
  let fixture: ComponentFixture<MessagesComponent>; // Fixture para gestionar el ciclo de vida del componente

  // Configuración previa a cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ] // Declara el componente para pruebas
    })
    .compileComponents(); // Compila los componentes para pruebas

    fixture = TestBed.createComponent(MessagesComponent); // Crea el componente para pruebas
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Aplica la detección de cambios para actualizar la vista
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente no es nulo ni indefinido
  });
});
