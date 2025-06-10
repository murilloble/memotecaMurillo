import { Pensamento } from './../../../../../2438-angular-memoteca-aula-6/src/app/componentes/pensamentos/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  pensamento = {
    conteudo: "I love Angular",
    autoria: "Nay",
    modelo: "modelo3"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
