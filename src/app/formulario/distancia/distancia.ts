import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
  styleUrl: './distancia.css',
})
export class Distancia {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  result: number = 0;

  resultado(): void {
    this.result = Math.sqrt(Math.pow(this.num3 - this.num1, 2) + Math.pow(this.num4 - this.num2, 2));
  }
}