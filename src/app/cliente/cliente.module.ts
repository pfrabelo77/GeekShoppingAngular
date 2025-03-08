import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClienteService } from './shared/cliente.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSlideToggleModule
    
  ],
  providers: [
  	ClienteService
  ]
})
export class ClienteModule { }
