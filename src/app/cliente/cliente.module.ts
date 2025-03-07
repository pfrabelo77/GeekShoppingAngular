import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClienteService } from './shared/cliente.service';

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
  	ClienteService
  ]
})
export class ClienteModule { }
