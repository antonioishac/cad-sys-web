import { Component, OnInit, HostBinding } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    this.useLanguage('pt');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
