import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalhaProdutoComponent } from './detalha-produto/detalha-produto.component';
import { AdicionaProdutoComponent } from './adiciona-produto/adiciona-produto.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    DetalhaProdutoComponent,
    AdicionaProdutoComponent,
    EditaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
