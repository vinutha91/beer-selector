import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Beer } from '../../models/beer.model';

@Component({
  selector: 'bs-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent {
  @Input() beer!: Beer;
}
