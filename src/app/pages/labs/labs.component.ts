import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicacion de angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componente',
    'Crear Servicio'
  ];

  name ='Anderson';
  age= '24';
  disabled="true";
  img="https://w3schools.com/howto/img_avatar.png";

  persona = {
    name: 'anderson',
    age: 24,
    avatar: "https://w3schools.com/howto/img_avatar.png",
  }
}
