/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import { TodoActionType, ActionType } from './actions';

export interface TodoState {
  id: number;
  name: string;
}

export const initialState: TodoState[] = [];

export function todo(state: TodoState[] = initialState, action: ActionType): TodoState[] {
  switch (action.type) {
    case TodoActionType.CREATE:
      const data = state.map(todo => todo.id);
      const id = data.length === 0 ? 1 : Math.max(...data) + 1;
      const inputData = [{ id: id, name: action.payload.name }];
      return [...state, ...inputData];
    case TodoActionType.DELETE:
      const remove = state.filter(todo => action.payload.id !== todo.id);
      return [...remove];
    case TodoActionType.UPDATE:
      const update = state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return todo;
      });
      return [...update];
    default:
      return state;
  }
}
