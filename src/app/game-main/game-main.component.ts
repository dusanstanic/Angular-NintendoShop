import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.css'],
})
export class GameMainComponent implements OnInit {
  // gameId = false;
  // showGame = true;
  // gameName = 'Default';
  // gameCreated = false;
  // serverId: number = 10;
  // serverStatus: String = 'offline';
  // games = ['game1', 'game2'];
  // getGameId() {
  //   return this.gameId;
  // }
  // getShowGame() {
  //   return this.showGame;
  // }
  // enter(event: Event) {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  // createGame() {
  //   this.gameCreated = true;
  // }
  // getServiceName() {
  //   return this.serverId;
  // }
  // constructor() {
  //   this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  // }
  // getColor() {
  //   return this.serverStatus === 'online' ? 'green' : 'red';
  // }
  ngOnInit(): void {
    console.log('navigate');
    // this.router.navigate(['games'], { relativeTo: this.route });
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('constructor');
  }

  @Input() game: { title: string; price: number };

  showGames() {
    this.router.navigate(['games'], { relativeTo: this.route });
  }
}
