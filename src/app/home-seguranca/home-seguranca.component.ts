import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-seguranca',
  templateUrl: './home-seguranca.component.html',
  styleUrls: ['./home-seguranca.component.scss']
})
export class HomeSegurancaComponent implements OnInit {
  
  constructor(    
    private router: Router
  ) { }

  ngOnInit() {
  }  

}
