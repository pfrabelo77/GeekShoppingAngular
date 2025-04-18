import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProdutoService } from '../shared/produto.service';
import { Produto } from 'src/app/shared/produto.model';
import { Erro } from 'src/app/shared/erro.model';
import { ImageUpload } from 'src/app/shared/imageupload.model';
import { MessageService } from 'src/app/shared/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  @ViewChild('formProduto', { static: true })
  formProduto: NgForm;
  produto: Produto = new Produto();
  errosBackEnd: Erro[] = [];
  isLoading: boolean = false;
  imageUpload: ImageUpload = new ImageUpload();
  previewBase64Image :string = '';
  idProduto : string | null = ''; 
  urlApi = environment.apiUrlProdutos; //URL api DEV carregada do environment.ts 'https://localhost:7184/api/Produto/'
  

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
     private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.produto.price = null;
    this.idProduto = this.route.snapshot.paramMap.get('id');
    this.CarregarProduto(this.idProduto);
  }

  sendMessage(msg: string) {
    this.messageService.changeMessage(msg);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.previewBase64Image = '';
      this.imageUpload.fileName = file.name;
      this.convertToBase64(file);
      //this.PreviewImage();
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUpload.base64Image = reader.result as string;
    };
  }

  PreviewImage() {
    if (this.imageUpload.fileName && this.imageUpload.base64Image) {
      this.produtoService.PreviewImage(this.imageUpload.base64Image, this.imageUpload.fileName).subscribe(response => {
        console.log('Response PreviewImage ', response);
        this.previewBase64Image = response.base64ImageResponse;
        this.cdr.detectChanges(); // Força a atualização da UI 
      });
    }
  }

  CarregarProduto(id: string) {
    console.log('CarregarProduto: ', id);

    this.produtoService.FindById(id).subscribe({
      next: (data) => {
        this.produto = data;
        console.log('CarregarProduto: ', data);
        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => {
        console.error('Erro ao buscar produtos', err)
      }
    });
  }

  Alterar(formProdutoValue: any): void {
    if (this.formProduto.form.valid) {
      this.isLoading = true;
      this.produto = Object.assign(this.produto, formProdutoValue);
      if (this.imageUpload.fileName && this.imageUpload.base64Image) {
        this.produto.imageUpload = this.imageUpload;
      }
      this.produtoService.Alterar(this.produto).subscribe({
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
            this.sendMessage("Produto Alterado com sucesso!");
            this.router.navigate(["produto/FindAll"]);
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
