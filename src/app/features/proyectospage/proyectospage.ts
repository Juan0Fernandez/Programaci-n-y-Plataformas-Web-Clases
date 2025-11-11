import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyect } from './Componentes/listado-proyecto/listado-proyect/listado-proyect';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'proyectos-page',
  standalone: true,
  imports: [ListadoProyect],
  templateUrl: './proyectospage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage { 

  name = signal('');
  description = signal('');
  
  
  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto Alfa', descripcion: 'Descripción inicial de Alfa' },
    { id: 2, nombre: 'Proyecto Beta', descripcion: 'Descripción inicial de Beta' },
    { id: 3, nombre: 'Proyecto Gamma', descripcion: 'Descripción inicial de Gamma' },
  ]);

  changeName(value: string) {
    this.name.set(value);
  }
  
  changeDescription(value: string) {
    this.description.set(value);
  }

  addProyecto() {
    const nuevosProyectos = [...this.proyectos()];
    const newProyecto: Proyecto = {
      id: nuevosProyectos.length + 1,
      nombre: this.name(),
      descripcion: this.description()
    };
    nuevosProyectos.push(newProyecto);
    this.proyectos.set(nuevosProyectos);
    this.name.set('');
    this.description.set('');
  }
}