import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';
import { User } from '../shared/model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user = new User();

  constructor(
    private userService: UsuarioService,
    private messageService: MessageService,
    //private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    
  }

  get editando() {
    return Boolean(this.user.id);
  }

  carregarUser(codigo: string) {
    this.userService.buscarPorCodigo(codigo)
      .then(user => {
        this.user = user;
      })
      //.catch(erro => this.errorHandler.handle(erro));
      .catch(erro => console.log(erro));
  }

  salvar(form: FormControl) {
    console.log(form.value);
    this.adicionarUser(form);
  }

  adicionarUser(form: FormControl) {
    this.userService.adicionar(this.user)
      .then(userAdicionada => {
        this.messageService.add({ severity: 'success', detail: `Usuário ${userAdicionada.name} adicionada com sucesso!` });
        this.router.navigate(['/pesquisar-usuario']);
      })
      .catch(erro => {
        this.messageService.add({ severity: 'success', detail: `Não Autorizado` });
        this.router.navigate(['/login']);
      })
      
  }

  /* atualizarUser(form: FormControl) {
    this.userService.atualizar(this.user)
      .then(user => {
        this.user = user;

        this.messageService.add({ severity: 'success', detail: 'Usuário alterada com sucesso!' });
      })
      .catch(erro => console.log(erro));
  } */

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.user = new User();
    }.bind(this), 1);

    this.router.navigate(['/cadastrar-usuario']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de usuário: ${this.user.id}`);
  }

}
