import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ==== Agular Material ====  
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';



// Componets do Modulo Produto
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

// Services do Modulo Produto
import { ProdutoService } from './shared/produto.service';

@NgModule({
  declarations: [
    ListarProdutoComponent,
    CadastrarProdutoComponent
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
    ],exports: [
      ListarProdutoComponent,
      CadastrarProdutoComponent
    ] 
})
export class ProdutoModule { }
