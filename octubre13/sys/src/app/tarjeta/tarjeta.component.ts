import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  age=22
  incrementarEdad(){
    this.age+=1
  }
  reducirEdad(){
    this.age-=1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
