import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Paciente {
  nombre: string;
  correo: string;
  motivo: string;
}

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  nombre = '';
  correo = '';
  motivo = '';

  pacientes: Paciente[] = [];

  agregarPaciente() {

    const paciente: Paciente = {
      nombre: this.nombre,
      correo: this.correo,
      motivo: this.motivo
    };

    this.pacientes.push(paciente);

    this.nombre = '';
    this.correo = '';
    this.motivo = '';
  }
}