import { APP_BASE_HREF } from '@angular/common';
import { ProdutoService } from './produtos/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
