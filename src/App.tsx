import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'pages/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import { ToastContext, useToastInit } from 'components/toast/ToastContext';
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
