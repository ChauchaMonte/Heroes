import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  buscarHeroes( termino: string ) {
    this._router.navigate([ '/heroesBusqueda', termino ]);
  }

}
