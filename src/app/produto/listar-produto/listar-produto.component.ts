import { AfterViewInit, Component, OnInit, ViewChild , ChangeDetectionStrategy} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ProdutoService } from '../shared/produto.service'; 
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListarProdutoComponent implements OnInit, AfterViewInit {

  @ViewChild('formProduto', { static: true })
  formProduto!: NgForm;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  
  constructor(private produtoService: ProdutoService,
      private router: Router, private cdr: ChangeDetectorRef) { 
 
  }
  
  ELEMENT_DATA: Produto[] = [];  
  displayedColumns: string[] = ['name', 'price', 'description','categoryName','imageUrl', 'id'];
 dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);  
      
    ngOnInit(): void {
     this.produtoService.FindAll().subscribe({
        next: (data) => { this.ELEMENT_DATA = data; 
                          console.log('Retorno: ', data);
                          this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

                          this.cdr.detectChanges(); // Força a atualização da UI
                        },
        error: (err) => console.error('Erro ao buscar produtos', err)
      });


      }

      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }


}

