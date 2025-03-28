import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../../app.config.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ProdutoService } from '../shared/produto.service';
import { Produto } from 'src/app/shared/produto.model';
import { Erro } from 'src/app/shared/erro.model';


@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListarProdutoComponent implements OnInit, AfterViewInit {

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private produtoService: ProdutoService,
    private router: Router, private cdr: ChangeDetectorRef, private configService: ConfigService) {
    this.titleComponentListarProdutos = this.configService.getConfig('titleComponentListarProdutos');

  }

  categoryNameFiltro: string = '';
  exibirTabela: boolean = true;
  titleComponentListarProdutos: string = '';
  isLoading: boolean = true;
  produtoModal: Produto = new Produto();
  produtoDeletado: boolean = false;

  //Variaveis para a mat-table
  ELEMENT_DATA: Produto[] = [];
  displayedColumns: string[] = ['name', 'price', 'description', 'categoryName', 'imageUrl','id'];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  ngOnInit(): void {

      this.FindAll();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  FindAll(){
    this.isLoading = true;
    this.produtoService.FindAll().subscribe({
      next: (data) => {
        this.ELEMENT_DATA = data;
        console.log('Retorno: ', data);
        this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;  // Set loading to false when data is received
        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => {
        console.error('Erro ao buscar produtos', err)
        this.isLoading = false;  // Set loading to false when data is received
      }
    });

  }

  FiltrarCategoria(categoryNameStr: string) {
    this.isLoading = true;
    if (categoryNameStr == '') {categoryNameStr = null;} // Se for vazio, passa null e desconsidera o filtro
    let produtoFiltro: Produto = { categoryName: categoryNameStr, description: null, id: null, imageUrl: null, name: null, price: null };
    console.log('Retorno Categoria: ', produtoFiltro);
    this.produtoService.FindProduto(produtoFiltro).subscribe({
      next: (data) => {
        this.ELEMENT_DATA = data;
        console.log('Retorno Categoria: ', data);
        this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => {
        console.error('Erro ao buscar Filtrar produtos Categoria', err)
        this.isLoading = false;  // Set loading to false when data is received
      }

    });
  }

  Deletar() {
    this.produtoModal.name = "Carregando Produto ... ";
    this.produtoModal.price = null;
    this.produtoModal.description = null;  
    this.produtoModal.categoryName = null;  

    this.isLoading = true;
    this.cdr.detectChanges(); // Força a atualização da UI
    this.produtoService.Deletar(this.produtoModal.id).subscribe({
      next: (data) => {
        this.produtoDeletado = data;
        console.log('Retorno Deletar: ', data);
        this.FindAll();
        this.isLoading = false;
        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => {
        console.error('Erro ao buscar Filtrar produtos Categoria', err)
        this.isLoading = false;  // Set loading to false when data is received
      }

    });
  }

  CarregarProdutoModal(id :string){
    console.log('CarregarProdutoModal: ', id);
    
    this.produtoService.FindById(id).subscribe({
      next: (data) => {
        this.produtoModal = data;
        console.log('CarregarProdutoModal: ', data);
         this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => {
        console.error('Erro ao buscar produtos', err)
      }
    });
   
  }


}

