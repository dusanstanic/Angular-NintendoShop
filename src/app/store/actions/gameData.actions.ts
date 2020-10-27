import { Action } from '@ngrx/store';
import { Game } from 'src/app/models/Game.model';
import * as actionTypes from '../actions/actionTypes/gameData.actionTypes';

export class SetGames implements Action {
  readonly type = actionTypes.SET_GAMES;
  payload: Game[];

  constructor(games: Game[]) {
    this.payload = games;
  }
}

export type ActionTypes = SetGames;
