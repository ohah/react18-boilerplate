import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from 'components';
describe('툴팁테스트', () => {
  test('마우스 오버 테스트', async () => {
    render(
      <Tooltip title="타이틀" position="right">
        툴팁
      </Tooltip>,
    );
    await userEvent.hover(screen.getByText(/툴팁/i));
  });
});
