import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './app.config.service';
import { HttpClientModule } from '@angular/common/http';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

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
    HttpClientModule
    //FontAwesomeModule,

  ],

  providers: [
  
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
