import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss']
})
export class EditaProdutoComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  produtoForm: FormGroup;
  _id:string='';
  prod_nome:string='';
  prod_desc:string='';
  prod_preco:number=null;
  isLoadingResults = false;

  ngOnInit() {

    this.getProduto(this.route.snapshot.params['id']);
    this.produtoForm = this.formBuilder.group({
      'prod_nome' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_preco' : [null, Validators.required]
    });
  }

  getProduto(id) {
    this.api.getProdutoFindById(id).subscribe(data => {
      this._id = data._id;
      this.produtoForm.setValue({
        prod_name: data.prod_nome,
        prod_desc: data.prod_desc,
        prod_price: data.prod_preco
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduto(this._id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/detalha-produto', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  detalhaProduto() {
    this.router.navigate(['/detalha-produto', this._id]);
  }


}
