import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Beer } from '../models/beer.model';

@Component({
  selector: 'bs-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomBeerComponent {
  @Input() beer: Beer[] = [];
  @Output() getRandomBeerEvent: EventEmitter<string> = new EventEmitter();

  getRandomBeer(type: string): void {
    this.getRandomBeerEvent.emit(type);
  }
}
