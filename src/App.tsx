import 'App.css';
import {ToastContainer} from 'component/toast';
import useToast from 'hook/useToast';
import {useEffect} from 'react';

function App() {
  const [toast, setToast] = useToast();
  // console.log('toast', toast());
  useEffect(() => {
    setInterval(() => {
      setToast({
        type: 'info',
        message: '테스트',
        timeout: 3000,
      });
      console.log('실행', toast, setToast);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <ToastContainer />
    </div>
  );
}

export default App;
