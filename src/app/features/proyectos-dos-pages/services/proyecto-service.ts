import { Injectable, signal } from '@angular/core';

interface Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProyectosService { 

  constructor() { }
  
  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto Uno', descripcion: 'El primer proyecto importante.' },
    { id: 2, nombre: 'Proyecto Dos', descripcion: 'Este es el proyecto secundario.' },
  ]);
}