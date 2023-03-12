/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-no-useless-fragment */
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import Toast, { useToast } from 'components/Toast';

const App = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Component = () => {
  const { toast } = useToast();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          toast('테스트');
        }}
      >
        토스트
      </button>
      <Toast.Container />
    </div>
  );
};

describe('토스트 테스트', () => {
  test('클릭 테스트', async () => {
    // jest.useFakeTimers();
    const { result } = renderHook(() => Toast.initialState());
    const { container, debug, rerender } = render(
      <App>
        <Toast.Context.Provider value={result.current}>
          <Component />
        </Toast.Context.Provider>
      </App>,
    );
    await fireEvent.click(await screen.getByText(/토스트/i));
    // console.log('none', result.current.queue);
    await waitFor(async () => {
      expect(result.current.queue[0].message).toEqual('테스트');
    });
    await waitFor(async () => {
      await fireEvent.click(await screen.getByText(/토스트/i));
    });
    console.log('result.current', result.current);
    console.log('container', await container.innerHTML);
    console.log('debug', await debug());
    // expect(result.current.queue[0].message).toEqual('테스트');
    // jest.runAllTimers();
  });
});
