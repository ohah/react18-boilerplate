export enum CounterActionType {
  INCREASE = 'counter/INCREASE',
  DECRESE = 'counter/DECRESE',
}

export const counterActions = {
  increase: () => ({
    type: CounterActionType.INCREASE,
    payload: 1,
  }),
  decrese: () => ({
    type: CounterActionType.DECRESE,
    payload: -1,
  }),
};

export type ActionType = ReturnType<typeof counterActions.increase> | ReturnType<typeof counterActions.decrese>;
