import { useTodo } from 'store/todo/hooks';

const Todo = () => {
  const { create, remove, todo, update } = useTodo();
  return (
    <div>
      <button type="button" onClick={() => create('Hello')}>
        생성
      </button>
      {todo.length === 0 && <div> 리스트가 없습니다 </div>}
      {todo.map((row) => {
        return (
          <div key={row.id}>
            <span>
              {row.id} {row.name}
            </span>
            <button type="button" onClick={() => remove(row.id)}>
              삭제
            </button>
            <button type="button" onClick={() => update(row.id, 'WORLD')}>
              업데이트
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
