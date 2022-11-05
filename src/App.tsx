import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'pages/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { useRecoilValue } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeState } from 'store/recoil/theme/atom';
import { ToastContainer } from 'components/toast';
import { ToastContext, useToastInit } from 'components/toast/ToastContext';
import Todo from 'pages/recoil/Todo';
import Submit from 'pages/Submit';

const queryClient = new QueryClient();

const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
  html, body, a {
    background-color: ${({ theme }) => (theme.color === 'dark' ? 'black' : 'white')};
    color: ${({ theme }) => (theme.color !== 'dark' ? 'black' : 'white')};
  }
`;

function App() {
  return (
    <ThemeProvider theme={useRecoilValue(ThemeState)}>
      <GlobalStyle />
      <Provider store={store}>
        <ToastContext.Provider value={useToastInit()}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route element={<Home />} />
                <Route index element={<Submit />} />
              </Route>
            </Routes>
            <ToastContainer />
          </QueryClientProvider>
        </ToastContext.Provider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
