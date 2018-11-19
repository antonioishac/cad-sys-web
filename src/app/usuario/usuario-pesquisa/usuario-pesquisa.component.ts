import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { UserFiltro } from 'src/app/shared/model';
import { UsuarioService } from '../usuario.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss']
})
export class UsuarioPesquisaComponent implements OnInit {

  filtro = new UserFiltro();

  users = [];

  @ViewChild('tabela') grid;

  constructor(
    private userService: UsuarioService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.pesquisarTodos();
  }

  pesquisar() {
    
    this.userService.pesquisar(this.filtro)
      .then(resultado => {
        this.users = [];
        this.users.push(resultado);
      })
      .catch(error => {
        console.log(error.error.mensagem);
        this.messageService.add({ severity: 'error', detail: error.error.mensagem });
      });
  }

  pesquisarTodos() {
    this.userService.listarTodas()
      .then(resultado => {
        this.users = resultado;
      })
      .catch(error => {
        console.log(error.error);
        this.messageService.add({ severity: 'error', detail: error.error });
      });
  }
}
