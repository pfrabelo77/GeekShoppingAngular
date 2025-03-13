import { DEFAULT_CURRENCY_CODE, LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';

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
    // MatSlideToggleModule,
    //     MatCardModule,
    //     MatButtonModule, 
    //     MatDividerModule, 
    //     MatIconModule,
         HomeModule,
         ClienteModule,
         ProdutoModule  
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
