import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";
import { FilmesComponent } from "./demos/pipes/filmes/filmes.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "cadastro", component: CadastroComponent, canDeactivate: [CadastroGuard] },
  { path: "sobre", component: SobreComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: "feature-data-binding", component: DataBindingComponent },
  {
    path: "produtos",
    loadChildren: () =>
      import("./demos/arquitetura-componentes/produto.module").then(
        (m) => m.ProdutoModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
        import("./admin/admin.module")
        .then((m) => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]},
  { path: "produto-detalhe/:id", component: ListaProdutoComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}