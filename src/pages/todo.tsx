import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { counterActions } from 'store/counter/actions';
import useTodo from 'store/todo/hooks';

const Todo = () => {
  // const count = useSelector((state: RootState) => state.counter.count);
  const { todoState, create, remove, update } = useTodo();
  return (
    <div>
      <button type="button" onClick={() => create('무야호')}>
        create
      </button>
      <table>
        {todoState.map(row => {
          return (
            <tr key={row.id}>
              <td> {row.id} </td>
              <td> {row.name} </td>
              <td>
                <button type="button" onClick={() => update({ id: row.id, name: '예 저희도 정말 즐겨보죠' })}>
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
