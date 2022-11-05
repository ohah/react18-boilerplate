import axios from 'axios';
import { Dropdown } from 'components';
import Button from 'components/Button';
import { DropdownProps } from 'components/Dropdown';
import { useEffect, useState } from 'react';

const Submit = () => {
  const [list, setList] = useState();
  const [data, setData] = useState<string>('리액트');
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await axios.post('/api/form', {
      value: data,
    });
    get();
  };
  const DropdownList: DropdownProps = {
    value: [
      { title: '리액트', value: 'react' },
      { title: '뷰', value: 'vue' },
      { title: '스벨트', value: 'svelte' },
    ],
    label: 'SPA',
    defaultValue: '리액트',
    onChange: (value: string) => {
      setData(value);
    },
  };
  const get = async () => {
    const result = await axios.get('/api/form');
    setList(result.data);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <div>{JSON.stringify(list)}</div>
      <Dropdown {...DropdownList} />
      <Button> 폼 보내기 </Button>
    </form>
  );
};

export default Submit;
