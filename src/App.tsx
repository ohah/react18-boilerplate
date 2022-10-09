import 'App.css';
import {ToastContainer} from 'component/toast';
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import Home from 'pages/Home';
import {ToastContext, useToastInit} from 'context/ToastContext';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <div className="App">
      <ToastContext.Provider value={useToastInit()}>
        <GlobalStyle />
        <Home />
        <ToastContainer />
      </ToastContext.Provider>
    </div>
  );
}

export default App;
