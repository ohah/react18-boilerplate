/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';

export enum CounterActionType {
  INCREASE = 'counter/INCREASE',
  DECRESE = 'counter/DECRESE',
  INCREASE_BY = 'counter/INCREASE_BY',
}

export const counterActions = {
  increase: () => ({
    type: CounterActionType.INCREASE,
    payload: 1,
  }),
  decrease: () => ({
    type: CounterActionType.DECRESE,
    payload: -1,
  }),
  increaseBy: (diff: number) => ({
    type: CounterActionType.INCREASE_BY,
    payload: diff,
  }),
};

export type ActionType =
  | ReturnType<typeof counterActions.increaseBy>
  | ReturnType<typeof counterActions.increase>
  | ReturnType<typeof counterActions.decrease>;
