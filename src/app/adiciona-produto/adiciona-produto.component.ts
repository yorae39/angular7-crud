import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-adiciona-produto',
  templateUrl: './adiciona-produto.component.html',
  styleUrls: ['./adiciona-produto.component.scss']
})
export class AdicionaProdutoComponent implements OnInit {

  produtoForm: FormGroup;
  prod_nome:string='';
  prod_desc:string='';
  prod_preco:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.produtoForm = this.formBuilder.group({
      'prod_nome' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_preco' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm){
    this.isLoadingResults = true;
    this.api.addProduto(form)
      .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/detalha-produto', id]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
