import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from '../models/Game.model';

@Injectable()
export class GameService {
  games: Game[] = [];
  gamesChanged = new Subject<Game[]>();

  constructor(private http: HttpClient) {}

  setGames(games: Game[]) {
    this.games = games;
    this.gamesChanged.next(games.slice());
  }

  getGames() {
    console.log('games' + this.games);
    return this.games.slice();
  }
}
