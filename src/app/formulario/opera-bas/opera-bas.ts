import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.html',
  styleUrl: './opera-bas.css',
})
export class OperaBas {
  num1:string=''
  num2:string=''
  resultado:number=0
  opera:string=''
  mostrar:boolean=false


sumar():void{
  this.resultado=parseInt(this.num1)+parseInt(this.num2)
}

restar():void{
  this.resultado=parseInt(this.num1)-parseInt(this.num2)
}

multiplicar():void{
  this.resultado=parseInt(this.num1)*parseInt(this.num2)
}

dividir():void{
  this.resultado=parseInt(this.num1)/parseInt(this.num2)
}

result():void{
  if(this.opera == 'sumar') this.sumar();
  if(this.opera == 'restar') this.restar();
  if(this.opera == 'multiplicar') this.multiplicar();
  if(this.opera == 'dividir') this.dividir();

  this.mostrar = true;
}
}
