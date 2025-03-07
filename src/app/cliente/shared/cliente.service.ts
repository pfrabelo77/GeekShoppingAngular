import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente.model'; 

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor() { }

  listarTodos(): Cliente[] {
  	const clientes = localStorage['clientes'];
  	return clientes ? JSON.parse(clientes) : [];
  }
  cadastrar(cliente: Cliente): void {
  	const clientes = this.listarTodos();
  	cliente.id = new Date().getTime();
  	clientes.push(cliente);
  	localStorage['clientes'] = JSON.stringify(clientes);
  }

  CargaInicial(): void { 
    const clientes = this.listarTodos();
      if (clientes.length==0){
        this.cadastrar(new Cliente(1, 'Maria da silva santos', 'maria@gmail.com', '123.456.789-00', '(11) 95599-9999', new Date('1980-01-01'), 1000, true));
        this.cadastrar(new Cliente(2, 'João da silva santos', 'joao@gmail.com', '987.654.321-00', '(11) 96699-9999', new Date('1990-01-01'), 2000, true));  
        this.cadastrar(new Cliente(1, 'Carol da silva santos', 'carol@gmail.com', '321.456.789-00', '(11) 97799-9999', new Date('1985-01-01'), 3000, true));
        this.cadastrar(new Cliente(2, 'Marilia da silva santos', 'marilia@gmail.com', '456.654.321-00', '(11) 98899-9999', new Date('1974-01-01'), 4000, true));  
        this.cadastrar(new Cliente(2, 'Graça da silva santos', 'graca@gmail.com', '654.654.321-00', '(11) 94499-9999', new Date('1977-01-01'), 5000.50, true));  
    }
    }
  
  }
