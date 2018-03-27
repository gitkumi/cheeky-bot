import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  gameEnd: boolean  = false;
  playing: boolean  = false;
  playerTurn: boolean = true;
  currentNumber: number = 0;
  robotLastMove: number = 0;

  constructor() { }

  ngOnInit() {
  }

  play() {
    this.gameEnd = false;
    this.playing = true;
  }

  submit(number: number) {
    this.playerTurn = true;
    this.addNumber(number);
    if(!this.gameEnd) {
      this.think(number);
    }
  }

  think(number: number) {
    this.playerTurn = false;

    let rand = Math.floor(Math.random() * 4) + 3;
    rand *= 1000;
    let rand2 = Math.floor(Math.random() * 10) + 1;
    rand2 *= 100;

    setTimeout(() => {
      let move = 4 - number;
      this.robotLastMove = move;
      this.addNumber(move);
      this.playerTurn = true;
    }, rand - rand2);

  }

  addNumber(number: number) {
    this.currentNumber += number;
    this.checkGame();
  }

  checkGame() {
    if(this.currentNumber >= 21) {
      this.gameEnd = true;
      this.playerTurn = true;
      this.playing = false;
      this.currentNumber = 0;
      this.robotLastMove = 0;
    }
  }

}
