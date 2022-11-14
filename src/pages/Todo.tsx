import useTodo from 'store/todo/hooks';

const Todo = () => {
  const { todoState, create, remove, update } = useTodo();
  return (
    <div>
      <button type="button" onClick={() => create('안녕')}>
        create
      </button>
      <table>
        {todoState.map(row => {
          return (
            <tr key={row.id}>
              <td> {row.id} </td>
              <td> {row.name} </td>
              <td>
                <button type="button" onClick={() => update({ id: row.id, name: '방가' })}>
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
      </table>
    </div>
  );
};

export default Todo;
