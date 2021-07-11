import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bs-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
