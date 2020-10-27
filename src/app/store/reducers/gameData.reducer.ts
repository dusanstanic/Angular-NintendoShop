import { Game } from 'src/app/models/Game.model';
import { Genre } from 'src/app/models/Genre.model';
import * as actionTypes from '../actions/actionTypes/gameData.actionTypes';
import { ActionTypes } from '../actions/gameData.actions';

export interface gameDataState {
  games: Game[];
  genres: Genre[];
  pgRatings: string[];
}

const initialState: gameDataState = { games: [], genres: [], pgRatings: [] };

export function gameDataReducer(state = initialState, action: ActionTypes) {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_GAMES:
      return { ...state, games: action.payload };
    default:
      return { ...state };
  }
}
