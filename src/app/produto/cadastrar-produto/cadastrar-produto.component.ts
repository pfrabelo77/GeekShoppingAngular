import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProdutoService } from '../shared/produto.service';
import { Produto } from 'src/app/shared/produto.model';
import { Erro } from 'src/app/shared/erro.model';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CadastrarProdutoComponent implements OnInit {

  @ViewChild('formProduto', { static: true })
  formProduto: NgForm;
  produto: Produto = new Produto();
  errosBackEnd: Erro[] = [];

  constructor(private produtoService: ProdutoService,
    private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.produto = new Produto();
    this.produto.price = null;
  }

  cadastrar(formProdutoValue : any): void {
    if (this.formProduto.form.valid) {
      this.produtoService.Cadastrar(formProdutoValue).subscribe({
                next: (data) => { this.produto = data; 
                                  console.log('Retorno Produto Cadastrado: ', data);
        
                                  this.cdr.detectChanges(); // Força a atualização da UI
                                  if (this.produto.erros.length > 0){
                                    this.errosBackEnd = this.produto.erros;
                                    return;
                                  }
                                  this.router.navigate(["produto/FindAll"]);
                                },
                error: (err) => console.error('Erro ao Cadastrar produto!', err)
              });
      
    }
  }

 


}
