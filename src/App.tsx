import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'pages/Header';
import RecoilHeader from 'pages/recoil/Header';
import Xhr from 'pages/Xhr';
import Fetch from 'pages/Fetch';
import Axios from 'pages/Axios';
import ReactQuery from 'pages/ReactQuery';
import UseSWR from 'pages/UseSWR';
import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from 'pages/Todo';
import RecoilTodo from 'pages/recoil/Todo';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Counter from 'pages/recoil/Counter';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeState } from 'store/recoil/theme/atom';

const queryClient = new QueryClient();

const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => (theme.color === 'dark' ? 'black' : 'white')};
    color: ${({ theme }) => (theme.color !== 'dark' ? 'black' : 'white')};
  }
`;

function App() {
  return (
    <ThemeProvider theme={useRecoilValue(ThemeState)}>
      <GlobalStyle />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
