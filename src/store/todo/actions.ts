/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';

export enum TodoActionType {
  CREATE = 'todo/CREATE',
  READ = 'todo/READ',
  DELETE = 'todo/DELETE',
  UPDATE = 'todo/UPDATE',
}

export const TodoActions = {
  create: (name: string) => ({
    type: TodoActionType.CREATE,
    payload: {
      id: -1,
      name: name,
    },
  }),
  read: () => ({
    type: TodoActionType.READ,
    payload: {
      id: -1,
      name: '',
    },
  }),
  delete: (id: number) => ({
    type: TodoActionType.DELETE,
    payload: {
      id: id,
      name: '',
    },
  }),
  update: (data: { id: number; name: string }) => ({
    type: TodoActionType.UPDATE,
    payload: data,
  }),
};

export type ActionType =
  | ReturnType<typeof TodoActions.create>
  | ReturnType<typeof TodoActions.read>
  | ReturnType<typeof TodoActions.delete>
  | ReturnType<typeof TodoActions.update>;
