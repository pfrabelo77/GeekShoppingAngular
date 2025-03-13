import { DEFAULT_CURRENCY_CODE, LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';

//  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//  import {MatDatepickerModule} from '@angular/material/datepicker';
//  import {MatInputModule} from '@angular/material/input';
//  import {MatFormFieldModule} from '@angular/material/form-field';
//  import { NativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
//  import {MatNativeDateModule} from '@angular/material/core';
//  import {MatIconModule} from '@angular/material/icon';
//  import {MatPaginatorModule} from '@angular/material/paginator';
//  import { MatSortModule } from '@angular/material/sort';
//  import { MatTableModule} from '@angular/material/table';
//  import {MatToolbarModule} from '@angular/material/toolbar';


import { HomeModule } from './home/home.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// 

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
          HomeModule,
         ClienteModule,
         ProdutoModule,
         
  ],
  
  providers: [
        // ************************************
        { provide: LOCALE_ID, useValue: 'pt' },
        // ************************************
    
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
