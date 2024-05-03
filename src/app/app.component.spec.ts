import { TestBed } from '@angular/core/testing'; // Importa las herramientas para probar componentes en Angular
import { AppComponent } from './app.component'; // Importa el componente que se va a probar

// Describe la suite de pruebas para AppComponent
describe('AppComponent', () => {
  let fixture; // Fixture para manejar la instancia del componente
  let app; // Instancia del componente
  
  // Configura el entorno de pruebas antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Declara el componente que vamos a probar
    }).compileComponents(); // Compila los componentes antes de las pruebas
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent); // Crea la instancia del componente
    app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Verifica que la instancia no es nula ni indefinida
  });

  // Prueba para verificar que el componente tiene el título esperado
  it('should have as title "app"', () => {
    fixture = TestBed.createComponent(AppComponent); // Crea la instancia del componente
    app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app.title).toEqual('app'); // Verifica que el título es igual al esperado
  });

  // Prueba para verificar que el título se renderiza correctamente en la plantilla
  it('should render title', () => {
    fixture = TestBed.createComponent(AppComponent); // Crea la instancia del componente
    fixture.detectChanges(); // Dispara la detección de cambios para actualizar la vista
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el DOM compilado
    expect(compiled.querySelector('h1')?.textContent).toContain('app'); // Verifica que el contenido del título es correcto
  });
});
