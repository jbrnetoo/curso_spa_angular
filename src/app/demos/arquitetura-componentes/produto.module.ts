import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProdutoRoutingModule } from './produto.route'
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component'
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe-component'
import { ProdutoCountComponent } from './componentes/produto-count-component'

import { registerLocaleData } from '@angular/common'
import locatePt from '@angular/common/locales/pt';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component'
import { ProdutoService } from './services/produto.service'
import { ProdutosResolve } from './services/produto.resolve'
registerLocaleData(locatePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
        ProdutosResolve
    ],
    exports: []
})
export class ProdutoModule{}