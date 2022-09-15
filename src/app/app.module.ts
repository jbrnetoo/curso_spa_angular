import { APP_BASE_HREF } from '@angular/common';
import { ProdutoService } from './produtos/produtos.service';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, rootRouterConfig } from './app.routes';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';
registerLocaleData(locatePt);
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { BarModule } from './demos/bar-di-zones/bar.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'e3r32r543trt6555yw'
    })
  ],
  providers: [
    ProdutoService,
    AuthGuard,
    CadastroGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
