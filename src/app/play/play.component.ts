import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  playing: boolean  = false;
  playerTurn: boolean = true;
  robotTurn: boolean = false;
  currentNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  play() {
    this.playing = true;
  }

  submit() {
    this.playerTurn = false;
    this.robotTurn = true;
  }

  think() {

  }

}
