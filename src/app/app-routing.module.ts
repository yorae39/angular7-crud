import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalhaProdutoComponent } from './detalha-produto/detalha-produto.component';
import { AdicionaProdutoComponent } from './adiciona-produto/adiciona-produto.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    data: {title: 'Lista de Produtos'}
  },
  {
    path: 'detalha-produto/:id',
    component: DetalhaProdutoComponent,
    data: {title: 'Detalhes do Produto'}
  },
  {
    path: 'adiciona-produto',
    component: AdicionaProdutoComponent,
    data: {title: 'Adiciona Produto'}
  },
  {
    path: 'edita-produto/:id',
    component: EditaProdutoComponent,
    data: {title: 'Edita Produto'}
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
