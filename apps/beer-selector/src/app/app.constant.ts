export const BASE_API_URL = 'https://api.punkapi.com/v2/';

export const APIS = {
  RANDOM: {
    GET_RANDOM_BEER: 'beers/random',
    GET_RANDOM_NON_ALCOHOLIC_BEER: 'beers?abv_lt=5',
  },
  BEERS: {
    ALL: 'beers',
  },
  SEARCH: {
    SEARCH_BY_NAME: 'beers?beer_name={query}',
    SEARCH_BY_DESCRIPTION: 'beers'
  },
};

export enum BEER_TYPES {
  ALCOHOLIC = 'alcoholic',
  NON_ALCOHOLIC = 'non-alcoholic',
}

export enum FACETS {
    NAME = 'name',
    DESCRIPTION = 'description'
}