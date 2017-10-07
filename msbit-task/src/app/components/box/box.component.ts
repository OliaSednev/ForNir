import { Component, Input } from '@angular/core';
import { Portfolio } from '../../models/app.models';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input('portfolio') portfolio: Portfolio;

  constructor() { }
}
