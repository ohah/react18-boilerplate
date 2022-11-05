import { Dropdown } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { counterActions } from 'store/counter/actions';
import useCounter from 'store/counter/hooks';

const Submit = () => {
  // const count = useSelector((state: RootState) => state.counter.count);
  const [data, setData] = useState({
    category: '',
    title: '',
    content: '',
  });
  const category = [
    { title: '공지', value: '공지' },
    { title: '일반', value: '일반' },
    { title: '프로그래밍', value: '프로그래밍' },
  ];
  const categoryChange = (value: string) => {
    setData(data => {
      return { ...data, category: value };
    });
  };
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setData(data => {
      return { ...data, title: value };
    });
  };
  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setData(data => {
      return { ...data, content: value };
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('??');
    e.preventDefault();
    console.log(e);
    return false;
  };
  const dispatch = useDispatch();
  const { counterState, increase, increaseBy, decrease } = useCounter();
  const { count } = counterState;
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    // form.current?.submit();
  }, []);
  return (
    <div>
      <form>
        <button type="submit"> 보내 </button>
      </form>
      <form onSubmit={onSubmit}>
        {JSON.stringify(data)}
        <div>
          <span>제목</span>
          <input type="text" placeholder="제목" name="title" onChange={titleChange} />
        </div>
        <div>
          <span>카테고리</span>
          <Dropdown value={category} defaultValue="프로그래밍" onChange={categoryChange} label="프로그래밍" />
        </div>
        <div>
          <span>내용</span>
          <textarea placeholder="내용" name="title" onChange={contentChange} />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Submit;
