import { Component, OnInit } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarServices, useClass: BarServices }
  ]
})
export class BarComponent implements OnInit {

  barBebida: string;

  constructor(private barServices: BarServices) { }
  ngOnInit(): void { 
    this.barBebida = this.barServices.obterBebidas();
  }


}