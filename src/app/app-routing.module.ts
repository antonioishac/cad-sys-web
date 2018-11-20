import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeSegurancaComponent} from './home-seguranca/home-seguranca.component';
import {LoginFormComponent} from './seguranca/login-form/login-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioPesquisaComponent } from './usuario/usuario-pesquisa/usuario-pesquisa.component';

export const appRoutes: Routes = [

    {
        path: 'login',
        component: LoginFormComponent,
        pathMatch: 'full'
    },
       
    {
        path: 'home',
        component: HomeSegurancaComponent
    },

    {
        path: '',
        component: LoginFormComponent
    },

    {
        path: 'cadastrar-usuario',
        component: UsuarioComponent
    },

    {
        path: 'pesquisar-usuario',
        component: UsuarioPesquisaComponent
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
