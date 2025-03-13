import { AfterViewInit, Component, OnInit, ViewChild , ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ClienteService } from '../shared/cliente.service';
import { Cliente } from 'src/app/shared/cliente.model';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListarComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clienteService: ClienteService,
  	private router: Router) { }

  
  ELEMENT_DATA: Cliente[] = [];   

  displayedColumns: string[] = ['nome', 'email', 'cpf','telefone','dataNascimento','creditoAprovado','ativo', 'id'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  
  ngOnInit(): void {
    this.ELEMENT_DATA = this.listarTodos();
    this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
 }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listarTodos(): Cliente[] {
  	return this.clienteService.listarTodos();
  }

  

}
