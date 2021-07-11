import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchQuery } from '../models/search-query.model';

@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Output() searchEvent: EventEmitter<SearchQuery> = new EventEmitter();

  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-0-\\s]+$')]),
    facet: new FormControl('', [Validators.required])
  });

  search(): void {
    this.searchEvent.emit({
      query: this.searchForm.controls.query.value,
      facet: this.searchForm.controls.facet.value
    });
  }
}
