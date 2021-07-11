import * as fuzzysort from 'fuzzysort';

import { APIS, BASE_API_URL, BEER_TYPES, FACETS } from '../app.constant';
import { Observable, of } from 'rxjs';

import { Beer } from '../models/beer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchQuery } from '../models/search-query.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private httpService: HttpClient) { }
  
  getRandomBeer(type: string): Observable<Beer[]> {
    let apiUrl = '';
    
    if (type === BEER_TYPES.ALCOHOLIC) {
      apiUrl = `${BASE_API_URL}${APIS.RANDOM.GET_RANDOM_BEER}`;
    }

    if (type === BEER_TYPES.NON_ALCOHOLIC) {
      apiUrl = `${BASE_API_URL}${APIS.RANDOM.GET_RANDOM_NON_ALCOHOLIC_BEER}`;
    }

    return this.httpService.get<Beer[]>(apiUrl).pipe(
      map((beers: Beer[]) => {
        return [beers[Math.floor(Math.random() * beers.length)]];
      })
    );
  }

  getBeers(): Observable<Beer[]> {
    const apiUrl = `${BASE_API_URL}${APIS.BEERS.ALL}`;
    return this.httpService.get<Beer[]>(apiUrl).pipe(
      map((beers: Beer[]) => {
        return beers.filter((beer: Beer) => {
          return beer.name && beer.description;
        })
      })
    );
  }

  searchBeers(searchQuery: SearchQuery): Observable<Beer[]> {
    let apiUrl = '';
    if (searchQuery.facet === FACETS.NAME) {
      apiUrl = `${BASE_API_URL}${APIS.SEARCH.SEARCH_BY_NAME}`.replace(
        '{query}',
        searchQuery.query.replace(' ', '_')
      );
      return this.httpService.get<Beer[]>(apiUrl).pipe(
        map((beers: Beer[]) => {
          return beers.filter((beer: Beer) => {
            return beer.name && beer.description;
          });
        })
      );
    }
    
    // since no API for search by description is available
    if (searchQuery.facet === FACETS.DESCRIPTION) {
      apiUrl = `${BASE_API_URL}${APIS.SEARCH.SEARCH_BY_DESCRIPTION}`;
      return this.httpService.get<Beer[]>(apiUrl).pipe(
        map((beers: Beer[]) => {
          // Adding fuzzy matching logic
          const allBeers = beers.filter((beer: Beer) => {
            return beer.name && beer.description;
          });
          const allDescriptions: string[] = allBeers.map((beer: Beer) => {
            return `[${beer.id}] ${beer.description}`;
          });
          const options = {
            limit: 100, // don't return more results than you need!
            allowTypo: false, // if you don't care about allowing typos
            threshold: -10000, // don't return bad results
          };
          const results = fuzzysort.go(searchQuery.query, allDescriptions, options);
          const allIds = results.map((result) => {
            return result.target
              .split(' ')[0]
              .substring(1, result.target.split(' ')[0].length - 1);
          });
          
          return allBeers.filter((beer: Beer) => {
            return allIds.indexOf(beer.id.toString()) !== -1;
          });
        })
      );
    }

    return of([]);
  }
}
