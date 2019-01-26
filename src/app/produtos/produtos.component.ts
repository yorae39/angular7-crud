import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['prod_nome', 'prod_preco'];
  data: Produto[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProdutos()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err =>{
      console.log(err);
      this.isLoadingResults = false;
    })
  }

}
