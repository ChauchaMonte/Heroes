import { Component, OnInit } from '@angular/core';
import { HeroesServices } from "../../services/heroes.services";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html'
})
export class HeroesBusquedaComponent implements OnInit {

  heroes: any = {};
  termino: string;

  constructor( private _heroesServices: HeroesServices,
               private _activateRoute: ActivatedRoute,
               private _router: Router
    ) {

    }

    ngOnInit() {

      this._activateRoute.params.subscribe( params => {
        this.heroes = this._heroesServices.buscarHeroes( params[ 'termino' ]);
        this.termino = params[ 'termino' ];
       });

    }

    verHeroe( idx: number ) {
      this._router.navigate(['/heroe', idx]);
    }

}
