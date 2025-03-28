import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'selector-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  // @Input() id: string;
	@Input() produtoModal: Produto;
	@Output() onDeletar: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

   }

  ngOnInit(): void {
  
  }

  DeletarModal() {
		this.onDeletar.emit();
	}


}
