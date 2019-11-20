import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../move';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.css']
})
export class MoveDetailsComponent implements OnInit {

  @Input() move: Move;

  constructor() { }

  ngOnInit() {
  }

}
