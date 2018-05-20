import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  onSelect(hero: Hero): void {
    console.log("Hero id pressed: "+hero.id);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
     .subscribe(hs => this.heroes = hs);
  }
}
