import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProdutoService } from '../shared/produto.service';
import { Produto } from 'src/app/shared/produto.model';
import { Erro } from 'src/app/shared/erro.model';
import { ImageUpload } from 'src/app/shared/imageupload.model';


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
  isLoading: boolean = false;
  imageUpload: ImageUpload = new ImageUpload();


  constructor(private produtoService: ProdutoService,
    private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.produto = new Produto();
    this.produto.price = null;
  }

  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageUpload.fileName = file.name;
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUpload.base64Image = reader.result as string;
    };
  }

  // onUpload() {
  //   if (this.imageUpload.fileName && this.imageUpload.base64Image) {
  //     this.produtoService.uploadImage(this.imageUpload.base64Image, this.imageUpload.fileName).subscribe(response => {
  //       this.imageUrl = response.base64Image;
  //       console.log('Upload realizado com sucesso!', response);
  //       this.cdr.detectChanges(); // Força a atualização da UI 
  //     });
  //   }
  // }



  // getImage(id: string) {
  //   this.produtoService.getImage(id).subscribe(response => {
  //     this.imageUrl = response.base64Image;
  //   });
  // }

  cadastrar(formProdutoValue: any): void {
    if (this.formProduto.form.valid) {
      this.isLoading = true;
      this.produto = Object.assign(this.produto, formProdutoValue);
      if (this.imageUpload.fileName && this.imageUpload.base64Image) {
        this.produto.imageUpload = this.imageUpload;
      }
      //console.log('Cadastrar Produto request: ', this.produto);    
      this.produtoService.Cadastrar(this.produto).subscribe({
        next: (data) => {
          this.produto = data;
          //console.log('Cadastrar Produto response: ', data);

          if (this.produto.erros.length > 0) {
            this.errosBackEnd = this.produto.erros;
            this.isLoading = false;  // Set loading to false when data is received
           this.cdr.detectChanges(); // Força a atualização da UI 
            return;
          }
          else {
            //this.doUpload(this.produto.id);
            this.router.navigate(["produto/FindAll/" + "Produto Cadastrado com sucesso!"] );
          }

        },
        error: (err) => {
          console.error('Erro ao Cadstrar produto', err)
          this.isLoading = false;  // Set loading to false when data is received
        }
      });

    }
  }




}
