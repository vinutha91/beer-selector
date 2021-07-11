import { Component, OnInit } from '@angular/core';

import { BEER_TYPES } from './app.constant';
import { Beer } from './models/beer.model';
import { BeerService } from './services/beer.service';
import { Observable } from 'rxjs';
import { SearchQuery } from './models/search-query.model';

@Component({
  selector: 'beer-selector-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'beer-selector';
  randomBeer$!: Observable<Beer[]>;
  searchResults$!: Observable<Beer[]>;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getRandomBeer(BEER_TYPES.ALCOHOLIC);
    this.getAllBeers();
  }

  search(searchQuery: SearchQuery): void {
    this.searchResults$ = this.beerService.searchBeers(searchQuery);
  }

  getRandomBeer(type: string): void {
    this.randomBeer$ = this.beerService.getRandomBeer(type);
  }

  private getAllBeers(): void {
    this.searchResults$ = this.beerService.getBeers();
  }
}
