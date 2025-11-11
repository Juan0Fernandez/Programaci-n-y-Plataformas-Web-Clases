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
    
     public proyectos = signal<Proyecto[]>([
        {
            id: 1,
            nombre: 'Proyecta A',
            descripcion: 'descripcion'
        }
    ]);

    addProyecto(newProyecto: Proyecto) {
        this.proyectos.set([...this.proyectos(), newProyecto]);
    }
}
