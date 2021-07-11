import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Beer } from '../models/beer.model';

@Component({
  selector: 'bs-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() searchResults: Beer[] = [];
}
