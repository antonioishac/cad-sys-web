import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MensageriaService } from '../../shared/mensageria/mensageria.service';

@Component({
  selector: 'sys-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  flagSidenav:boolean;

  constructor(
    private mensageriaService: MensageriaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  controlarSidenav() {
    this.mensageriaService.enviarMsgSidenav(true);
  }

  
}
