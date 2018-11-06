import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroes } from '../../services/heroes.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor( private _heroesServices: HeroesServices,
               private _router: Router
              ) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe( idx: number ) {
    this._router.navigate(['/heroe', idx]);
  }
}
