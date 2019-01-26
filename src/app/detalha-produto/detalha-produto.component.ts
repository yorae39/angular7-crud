import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Produto} from '../produto';

@Component({
  selector: 'app-detalha-produto',
  templateUrl: './detalha-produto.component.html',
  styleUrls: ['./detalha-produto.component.scss']
})
export class DetalhaProdutoComponent implements OnInit {

  produto: Produto = { _id: '', prod_nome: '', prod_desc: '', prod_preco: null, updated_at: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProdutoDetalhe(this.route.snapshot.params['id']);
  }


  getProdutoDetalhe(id) {
    this.api.getProdutoFindById(id)
      .subscribe(data => {
        this.produto = data;
        console.log(this.produto);
        this.isLoadingResults = false;
      });
  }
}
