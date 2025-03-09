import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'

import { ClienteService } from './shared/cliente.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    CadastrarComponent,
    ListarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
      // clearIfNotMatch : true
    }),
    MatSlideToggleModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule, 
    MatPaginatorModule,
    
  ],
  providers: [
  	ClienteService,
    NativeDateAdapter,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class ClienteModule { }
