import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BemvindoComponent } from './home/bemvindo/bemvindo.component';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { ListarComponent } from './cliente/listar/listar.component';	
import { ListarProdutoComponent } from './produto/listar-produto/listar-produto.component';
import { CadastrarProdutoComponent } from './produto/cadastrar-produto/cadastrar-produto.component';
import { AlterarProdutoComponent } from './produto/alterar-produto/alterar-produto.component';

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
	{ 
		path: 'cliente/listar',
		component: ListarComponent	 
	}, 
	{ 
		path: 'produto/FindAll',
		component: ListarProdutoComponent	 
	},
	{
		path: 'produto/FindAll/:mensagemSucesso',
		component: ListarProdutoComponent
	  }, 
	{ 
		path: 'produto/cadastrar',
		component: CadastrarProdutoComponent	 
	}
	, 
	{ 
		path: 'produto/alterar/:id',
		component: AlterarProdutoComponent	 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
