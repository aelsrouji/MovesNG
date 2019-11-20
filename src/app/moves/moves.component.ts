import { Component, OnInit } from '@angular/core';
import { Move } from '../move';
import { Moves } from '../mock-moves';


@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  moves = Moves;
  selectedMove: Move;

  
  constructor() { }

  ngOnInit() {   
  }

onSelect(move: Move): void {
  this.selectedMove = move;
}
}
