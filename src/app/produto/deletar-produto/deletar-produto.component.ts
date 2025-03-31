import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'selector-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  // @Input() id: string;
	@Input() produtoModal: Produto;
	@Output() onDeletar: EventEmitter<any> = new EventEmitter<any>();

  urlApi = environment.apiUrlProdutos; //URL api DEV carregada do environment.ts 'https://localhost:7184/api/Produto/'
  
  constructor() {

   }

  ngOnInit(): void {
  
  }

  DeletarModal() {
		this.onDeletar.emit();
	}


}
