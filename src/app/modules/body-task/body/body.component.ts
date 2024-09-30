import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  habilidades: string[] = ['']; 
  personas: string[] = ['']; 
  habilidadesForm!: FormGroup;

  ngOnInit(): void {
    this.habilidadesForm = new FormGroup({
      nombreHabilidad: new FormControl('', [Validators.required, Validators.minLength(4)])  
    });
  }

  onSubmit() {
    console.log(this.habilidadesForm.value);  
    console.log("habilidades= " + this.habilidades); 
    }

  agregarHabilidad(index: number) {
     console.log("habilidades= " + this.habilidades); 
    if (this.habilidades[index]) {
      this.habilidades.push('');  

    }
  }

  eliminarHabilidad(index: number) {
    if (this.habilidades.length > 1) {
      this.habilidades.splice(index, 1);  
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}