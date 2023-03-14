/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-no-useless-fragment */
import { fireEvent, render, renderHook, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        Toast
      </button>
      <button
        type="button"
        onClick={() => {
          toast('토스트');
        }}
      >
        토스트2
      </button>
      <Toast.Container />
    </div>
  );
};

describe('토스트 테스트', () => {
  test('클릭 테스트', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => Toast.initialState());
    const spy = jest.spyOn(result.current, 'toast');
    render(
      <App>
        <Toast.Context.Provider value={result.current}>
          <Component />
        </Toast.Context.Provider>
      </App>,
    );
    await fireEvent.click(await screen.getByText(/Toast/i));
    await waitFor(async () => {
      expect(result.current.queue[0].message).toBe('테스트');
      expect(spy.mock.calls[0][0]).toBe('테스트');
      await setTimeout(async () => {
        await fireEvent.click(await screen.getByText(/토스트2/i));
        expect(spy.mock.calls[1][0]).toBe('토스트');
        expect(result.current.queue[0].message).toBe('토스트');
      }, 5000);
    });
    jest.runAllTimers();
  });
});
