import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BeerComponent } from './search-results/beer/beer.component';

@NgModule({
  declarations: [AppComponent, RandomBeerComponent, SearchComponent, SearchResultsComponent, BeerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
