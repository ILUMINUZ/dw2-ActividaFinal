import { Component } from '@angular/core'; // Importa la clase para crear un componente
import { MessageService } from '../message.service'; // Importa el servicio para gestionar mensajes

@Component({
  selector: 'app-messages', // Nombre que se usa para incluir este componente en el HTML
  templateUrl: './messages.component.html', // Archivo HTML para este componente
  styleUrls: ['./messages.component.css'], // Archivo CSS para este componente
})
export class MessagesComponent {
  // Constructor que inyecta el servicio MessageService
  constructor(public messageService: MessageService) {}
}
