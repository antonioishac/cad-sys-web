import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MensageriaService {

    private msgSidenav = new BehaviorSubject<any>(null);
    recebeMsgSidenav = this.msgSidenav.asObservable();

    private msgAbasComponentes = new BehaviorSubject<any>(null);
    recebeMsgAbasComponentes = this.msgAbasComponentes.asObservable();

    private msgTrocarTema = new BehaviorSubject<any>(null);
    recebeMsgTrocarTema = this.msgTrocarTema.asObservable();

    constructor() { }

    // Mensagem do cabeçalho para o sidenav
    enviarMsgSidenav(message: any) {
        this.msgSidenav.next(message);
    }

    // Mensagem da troca de aba da tela Componentes
    enviarMsgAbasComponentes(message: any) {
        this.msgAbasComponentes.next(message);
    }

    // Mensagem para a troca de tema css
    enviarMsgTrocarTema(message: any) {
        this.msgTrocarTema.next(message);
    }



}
