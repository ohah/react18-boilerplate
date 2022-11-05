import React, { useEffect, useState } from 'react';
import { ITodoState } from 'store/recoil/todo/atom';
import useTodo from 'store/recoil/todo/hooks';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { TodoSelector } from 'store/recoil/todo/selector';

const Todo = () => {
  const { todoList, create, remove, update, readTodo } = useTodo();
  const { getReact, total } = useRecoilValue(TodoSelector);
  useEffect(() => {
    readTodo();
  }, []);
  const [text, setText] = useState<string>('');
  const onKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setText(e.currentTarget.value);
  };
  const createValidation = () => {
    if (text) {
      create(text);
    } else {
      alert('텍스트를 입력해주세요');
    }
  };
  return (
    <div>
      <input type="text" onKeyUp={onKeyup} />
      <button type="button" onClick={createValidation}>
        create
      </button>
      <table>
        {todoList.map(row => {
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
        총 {total}
        <h2> 리액트가 포함된 </h2>
        {getReact.map(row => {
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
      </table>
    </div>
  );
};

export default Todo;
