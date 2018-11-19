import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Phone } from 'src/app/shared/model';

@Component({
  selector: 'app-usuario-phone',
  templateUrl: './usuario-phone.component.html',
  styleUrls: ['./usuario-phone.component.scss']
})
export class UsuarioPhoneComponent implements OnInit {

  @Input() phones: Array<Phone>;
  phone: Phone;
  exbindoFormularioPhone = false;
  phoneIndex: number;

  constructor() { }

  ngOnInit() {
  }

  prepararNovoPhone() {
    this.exbindoFormularioPhone = true;
    this.phone = new Phone();
    this.phoneIndex = this.phones.length;
  }

  prepararEdicaoPhone(phone: Phone, index: number) {
    this.phone = this.clonarPhone(phone);
    this.exbindoFormularioPhone = true;
    this.phoneIndex = index;
  }

  confirmarPhone(frm: FormControl) {
    this.phones[this.phoneIndex] = this.clonarPhone(this.phone);

    this.exbindoFormularioPhone = false;

    frm.reset();
  }

  removerPhone(index: number) {
    this.phones.splice(index, 1);
  }

  clonarPhone(phone: Phone): Phone {
    console.log(phone.ddd);
    return new Phone(phone.ddd, phone.phoneNumber);
  }

  get editando() {
    return this.phone && this.phone.phoneNumber;
  }

}
