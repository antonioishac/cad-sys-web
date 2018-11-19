import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bloco-lateral',
  template: `
    <div class="bloco-lateral" [ngClass]="{'bloco-lateral--aberto':flagBlocoLateral}">
      <div class="bloco-lateral__conteudo" *ngIf="flagBlocoLateral">
        <div class="row">
          <div class="col-12">
            <h4>Ajuda</h4>
          </div>
          <div class="col-12" [innerHTML]="textoInformativo">
          </div>
        </div>
      </div>
      <div class="bloco-lateral__menu">
        <ul>
          <li matTooltip="Ajuda" (click)="toggleBlocoLateral(!flagBlocoLateral)">
            <fa-icon icon="info-circle"></fa-icon>
          </li>
        </ul>
      </div>
    </div>`
})
export class BlocoLateralComponent implements OnInit {

  @Input()
  textoInformativo: string;
  flagBlocoLateral: boolean;

  constructor() {
  }

  ngOnInit() {
    this.flagBlocoLateral = false;
  }

  toggleBlocoLateral(flag) {
    this.flagBlocoLateral = flag;
  }


}
