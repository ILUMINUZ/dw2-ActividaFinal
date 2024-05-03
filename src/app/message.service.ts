import { Injectable } from '@angular/core'; // Importa el decorador Injectable para definir un servicio

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación
})
export class MessageService { // Declara el servicio MessageService
  messages: string[] = []; // Un array para almacenar mensajes

  add(message: string) { // Método para añadir un mensaje al array
    this.messages.push(message);
  }

  clear() { // Método para limpiar todos los mensajes
    this.messages = [];
  }
}
