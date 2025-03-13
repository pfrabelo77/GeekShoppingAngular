import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';



import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


import { HttpClientModule } from '@angular/common/http';

import { ProdutoService } from './shared/produto.service';







@NgModule({
  declarations: [
    ListarProdutoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
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
      MatSortModule,
      MatGridListModule
      
    ],
    providers: [
      ProdutoService,
      NativeDateAdapter,
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ]
})
export class ProdutoModule { }
