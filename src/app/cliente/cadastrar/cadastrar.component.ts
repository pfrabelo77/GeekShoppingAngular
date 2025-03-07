import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { ClienteService } from '../shared/cliente.service';
import { Cliente } from 'src/app/shared/cliente.model'; ;  

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formCliente', { static: true })
  formCliente!: NgForm;
  cliente!: Cliente;
  //valor : number = 0;
  //cliente2 : Cliente = new Cliente(0, '', '', '', '', new Date(), 0, true); 

  constructor(private clienteService: ClienteService,
  	private router: Router) { }

  ngOnInit() {
  	this.cliente = new Cliente(0, '', '', '', '', new Date(), 0, true); 

  }

  cadastrar(): void {
    if (this.formCliente.form.valid) {
  	  this.clienteService.cadastrar(this.cliente);
  	  this.router.navigate(["/Home"]);
    }
  }


}
