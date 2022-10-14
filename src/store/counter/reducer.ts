/* eslint-disable default-param-last */
import { CounterActionType, ActionType } from './actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 } as CounterState;

export function counter(state: CounterState = initialState, action: ActionType): CounterState {
  switch (action.type) {
    case CounterActionType.INCREASE:
      return { count: state.count + 1 };
    case CounterActionType.DECRESE:
      return { count: state.count - 1 };
    case CounterActionType.INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
