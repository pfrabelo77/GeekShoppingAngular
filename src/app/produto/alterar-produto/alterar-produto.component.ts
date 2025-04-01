import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  sendMessage(msg: string) {
    this.messageService.changeMessage(msg);
    this.router.navigate(["produto/FindAll"]);
  }

}
