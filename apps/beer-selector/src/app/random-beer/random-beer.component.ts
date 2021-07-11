import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bs-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomBeerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
