import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'pages/Header';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import { ToastContext, useToastInit } from 'components/toast/ToastContext';
import Forecast from 'pages/Forecast';
import Todo from 'pages/query/Todo';
// import Todo from 'pages/recoil/Todo';
import { Suspense } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const store = createStore(rootReducer);

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <ToastContext.Provider value={useToastInit()}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<div />}>
                      <ErrorBoundary fallback={<div> 에러 </div>}>
                        <Todo />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route path="/ForeCast" element={<Forecast />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </ToastContext.Provider>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
