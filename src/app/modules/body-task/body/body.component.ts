import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements  OnInit {
  tareaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      personas: this.fb.array([this.crearPersona()])
    });
  }

  get personas(): FormArray {
    return this.tareaForm.get('personas') as FormArray;
  }

  getHabilidades(indexPersona: number): FormArray {
    return this.personas.at(indexPersona).get('habilidades') as FormArray;
  }

  crearPersona(): FormGroup {
    return this.fb.group({
      nameC: ['', [Validators.required]],
      age: ['', [Validators.required]],
      habilidades: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  agregarPersona() {
    this.personas.push(this.crearPersona());
  }

  eliminarPersona(index: number) {
    if (this.personas.length > 1) {
      this.personas.removeAt(index);
    }
  }

  agregarHabilidad(indexPersona: number) {
    const habilidades = this.getHabilidades(indexPersona);
    habilidades.push(this.fb.control('', Validators.required));
  }

  eliminarHabilidad(indexPersona: number, indexHabilidad: number) {
    const habilidades = this.getHabilidades(indexPersona);
    if (habilidades.length > 1) {
      habilidades.removeAt(indexHabilidad);
    }
  }

  onSubmit() {
    console.log(this.tareaForm.value);
  }
}