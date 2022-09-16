import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // { provide: BarServices, useClass: BarServices },
    {
      provide: BarServices,
      useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida: string;
  dadosUnidade: string;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
  ) { }

  ngOnInit(): void {
    this.barBebida = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();
  }
}