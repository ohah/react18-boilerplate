import {useEffect, useState} from 'react';

const Home = () => {
  const [text, setText] = useState<string>();
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        console.log('성공', xhr.responseText);
        setText(xhr.responseText);
      }
    };
    xhr.open('GET', 'http://localhost:3000/react');
    xhr.send();
  }, []);
  return (
    <div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>{JSON.stringify(JSON.parse(text || '{}'), null, 2)}</div>
  );
};

export default Home;
