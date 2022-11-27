import { useEffect } from 'react';
import { useTodo } from 'store/todo/hooks';
import {
  useTodoCreateMutation,
  useTodos,
  useTodosQuery,
  useTodosRemoveMutation,
  useTodoUpdateMutation,
} from 'store/todo/query';

const Todo = () => {
  const { create, remove, update } = useTodos();
  const { todo: TodoList } = useTodo();
  // useEffect(() => {
  //   readTodo();
  // }, []);
  const { data: todo, isError } = useTodosQuery();
  // const { mutate: remove } = useTodosRemoveMutation();
  // const { mutate: update } = useTodoUpdateMutation();
  // const { mutate: create } = useTodoCreateMutation();
  return (
    <div>
      {isError}
      {/* {JSON.stringify(TodoList)} */}
      <button type="button" onClick={() => create('Hello')}>
        생성
      </button>
      {/* {JSON.stringify(todo)} */}
      {todo &&
        todo.map((row) => {
          return (
            <div key={row.id}>
              <span>
                {row.id} {row.name}
              </span>
              <button type="button" onClick={() => remove(row.id)}>
                삭제
              </button>
              <button type="button" onClick={() => update({ id: row.id, name: 'world' })}>
                업데이트
              </button>
            </div>
          );
        })}

      {/* {todo.length === 0 && <div> 리스트가 없습니다 </div>} */}
      {/* {todo.map((row) => {
        return (
          <div key={row.id}>
            <span>
              {row.id} {row.name}
            </span>
            <button type="button" onClick={() => remove(row.id)}>
              삭제
            </button>
            <button type="button" onClick={() => update({ id: row.id, name: 'world' })}>
              업데이트
            </button>
          </div>
        );
      })} */}
    </div>
  );
};

export default Todo;
