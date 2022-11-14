import {
  useTodos,
  useTodosCreateMutation,
  useTodosQuery,
  useTodosRemoveMutation,
  useTodosUpdateMutation,
} from 'store/recoil/todo/useQueryTodoHooks';

const Todo = () => {
  // const { data: todoList } = useTodosQuery();
  // const { mutate: create } = useTodosCreateMutation();
  // const { mutate: update } = useTodosUpdateMutation();
  // const { mutate: remove } = useTodosRemoveMutation();
  const { data: todoList, create, update, remove } = useTodos();
  return (
    <div>
      <button type="button" onClick={() => create('Hello')}>
        create
      </button>
      <table>
        <tbody>
          {todoList?.map(row => {
            return (
              <tr key={row.id}>
                <td> {row.id} </td>
                <td> {row.name} </td>
                <td>
                  <button type="button" onClick={() => update({ id: row.id, name: 'World' })}>
                    수정
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => remove(row.id)}>
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
