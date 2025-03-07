import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BemvindoComponent } from './home/bemvindo/bemvindo.component';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/home/bemvindo', 
    pathMatch: 'full' 
  },
  { 
		path: 'home', 
		redirectTo: 'home/bemvindo' 
	},
	{ 
		path: 'home/bemvindo', 
		component: BemvindoComponent 
	}, 
  { 
		path: 'cliente/cadastrar', 
		component: CadastrarComponent 
	}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
