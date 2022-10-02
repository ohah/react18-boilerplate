import 'App.css';
import Modal from 'component/Modal';
import {useState} from 'react';

function App() {
  const [isModal, setModal] = useState(false);
  return (
    <div className="App">
      <button type="button" onClick={() => setModal(true)}>
        모달
      </button>
      <Modal isShow={isModal} close={() => setModal(false)}>
        <button type="button" onClick={() => setModal(false)}>
          ㅁㄴㅇㄹ
        </button>
      </Modal>
    </div>
  );
}

export default App;
