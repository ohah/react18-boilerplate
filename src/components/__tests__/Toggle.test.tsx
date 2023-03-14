import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle, Tooltip } from 'components';
// import { act } from 'react-dom/test-utils';
describe('토글 테스트', () => {
  test('토글 호출 테스트', async () => {
    const onChange = jest.fn();
    render(<Toggle active onChange={onChange} />);
    await fireEvent.click(screen.getByTestId('switch'));
    expect(onChange.mock.calls[0][0]).toStrictEqual(true);
    expect(onChange.mock.calls[1][0]).toStrictEqual(false);
  });
});
