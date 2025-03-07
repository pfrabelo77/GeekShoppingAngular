import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BemvindoComponent
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,   
  ]
})
export class HomeModule { }
