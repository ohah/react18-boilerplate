/* eslint-disable no-redeclare */
/* eslint-disable default-param-last */
import { counterState } from 'store/counter/atom';
import { ActionType, CounterActionType } from './actions';

export interface counterState {
  count: number;
}

export const initialState: counterState = { count: 0 };

export const counter = (state: counterState = initialState, action: ActionType): counterState => {
  switch (action.type) {
    case CounterActionType.INCREASE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
