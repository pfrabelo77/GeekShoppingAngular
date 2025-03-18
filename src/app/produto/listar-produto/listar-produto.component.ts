import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
    private router: Router, private cdr: ChangeDetectorRef) {

  }

  errosBackEnd: Erro[] = [];
  categoryNameFiltro: string = '';
  exibirTabela: boolean = true;  

  //Variaveis para a mat-table
  ELEMENT_DATA: Produto[] = [];
  displayedColumns: string[] = ['name', 'price', 'description', 'categoryName', 'imageUrl', 'id'];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.produtoService.FindAll().subscribe({
      next: (data) => {
        this.ELEMENT_DATA = data;
        console.log('Retorno: ', data);
        this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => console.error('Erro ao buscar produtos', err)
    });


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

  FiltrarCategoria(categoryNameStr: string) {
    let produtoFiltro: Produto = { categoryName: categoryNameStr, description: '', id: null, imageUrl: '', name: '', price: 0 };
    console.log('Retorno Categoria: ', produtoFiltro);
    this.produtoService.FindProduto(produtoFiltro).subscribe({
      next: (data) => {
        this.ELEMENT_DATA = data;
        console.log('Retorno Categoria: ', data);
        this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.cdr.detectChanges(); // Força a atualização da UI
      },
      error: (err) => console.error('Erro ao buscar Filtrar produtos Categoria', err)
    });
  }


}

