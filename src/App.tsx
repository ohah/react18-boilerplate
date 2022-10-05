import 'App.css';
import {ToastContainer} from 'component/toast';
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import Home from 'pages/Home';
import ToastProvider from 'context/ToastContext';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <div className="App">
      <ToastProvider>
        <GlobalStyle />
        <Home />
        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default App;
