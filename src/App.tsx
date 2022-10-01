import 'App.css';
import Pagination from 'component/Pagination';
import {useState} from 'react';

function App() {
  const onChange = (value: number) => {
    console.log(value);
  };
  return (
    <div className="App">
      <Pagination count={10} color="blue" page={5} onChange={onChange} />
    </div>
  );
}

export default App;
