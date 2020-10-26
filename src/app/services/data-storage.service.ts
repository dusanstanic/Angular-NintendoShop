import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/Game.model';
import { GameService } from './game.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private gameService: GameService) {}

  fetchGames() {
    return this.http
      .get<Game[]>('http://localhost:8080/games')
      .subscribe((response) => {
        console.log(response);
        this.gameService.setGames(response);
      });
  }
}
