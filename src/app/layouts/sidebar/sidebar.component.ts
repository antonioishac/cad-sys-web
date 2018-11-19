import {Component, OnInit} from '@angular/core';
import {MensageriaService} from '../../shared/mensageria/mensageria.service';
import {MenuItem} from 'primeng/api';
import {SlideMenu} from './slide-menu';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'sys-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    flagSidenav: any;

    flagNivel2: boolean;
    flagNivel3: boolean;

    idPai: number;
    idPaiNivelDois: number;
    nomePaiNivelDois: string;

    listaMenu: MenuItem[];

    listaNivel1: SlideMenu[];
    listaNivel2: SlideMenu[];
    listaNivel3: SlideMenu[];

    display: boolean = false;

    constructor(
        private mensageriaService: MensageriaService,
        public translate: TranslateService
    ) {
    }

    ngOnInit() {
        this.flagNivel2 = false;
        this.flagNivel3 = false;
        this.flagSidenav = false;

        this.idPai = 0;
        this.idPaiNivelDois = 0;
        this.nomePaiNivelDois = '';

        this.mensageriaService.recebeMsgSidenav.subscribe((message: boolean) => {
            this.flagSidenav = message;
        });

        this.construirNovoMenu();
    }

    construirNovoMenu() {
        this.listaNivel1 = [
            {
                id: '1B',
                label: 'Menu',
                icone: 'home',
                possuiFilho: false,
                possuiAutorizacao: true,
                rota: 'home'
            },
            {
                id: '1C',
                label: 'Login',
                icone: 'chart-pie',
                possuiFilho: false,
                possuiAutorizacao: true,
                rota: 'login'
            },
            {
                id: '1C',
                label: 'Cadastrar usuário',
                icone: 'chart-pie',
                possuiFilho: false,
                possuiAutorizacao: true,
                rota: 'cadastrar-usuario'
            },            
            {
                id: '1C',
                label: 'Pesquisar usuário',
                icone: 'chart-pie',
                possuiFilho: false,
                possuiAutorizacao: true,
                rota: 'pesquisar-usuario'
            }
        ];

    }

    fecharPanel() {
        this.flagSidenav = false;
    }

    irNivel2(id: number) {
        this.flagNivel2 = true;
        this.idPai = id;
    }

    irNivel3(id: number, label: string) {
        this.flagNivel3 = true;
        this.idPaiNivelDois = id;
        this.nomePaiNivelDois = label;
    }

    voltarNivel1() {
        this.flagNivel2 = false;
        this.flagNivel3 = false;
    }

    voltarNivel2() {
        this.flagNivel3 = false;
    }

    showDialog() {
        this.display = true;
        this.fecharPanel();
    }
}
