import 'App.css';
import { Routes, Route, Form } from 'react-router-dom';
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
import { RecoilRoot } from 'recoil';
import Counter from 'pages/recoil/Counter';
import { ToastContext, useToastInit } from 'components/toast/ToastContext';
import Subimt from 'pages/Submit';
import Forecast from 'pages/Forecast';
const queryClient = new QueryClient();

const store = createStore(rootReducer);

function App() {
  return (
    <RecoilRoot>
      <ToastContext.Provider value={useToastInit()}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/ForeCast" element={<Forecast />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </Provider>
      </ToastContext.Provider>
    </RecoilRoot>
  );
}

export default App;
