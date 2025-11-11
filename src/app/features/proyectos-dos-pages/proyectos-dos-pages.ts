// src/app/features/proyectos-dos-pages/proyectos-dos-pages.ts

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListadoProyect } from '../proyectospage/Componentes/listado-proyecto/listado-proyect/listado-proyect';
import { ProyectosService } from './services/proyecto-service'; 

@Component({
  selector: 'app-proyectos-dos-page',
  standalone: true,
  imports: [ListadoProyect], 
  templateUrl: './proyectos-dos-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPage {
  
  proyectosService = inject(ProyectosService); 
  
  // Exponemos la señal del servicio a través de una propiedad llamada 'proyectos'
  proyectos = this.proyectosService.proyectos; // <-- CORRECCIÓN
}