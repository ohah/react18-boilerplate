import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EasyTab } from 'components/Easy';
import { TabData } from 'components/Easy/Tab';
describe('탭 테스트', () => {
  test('loads and displays greeting', async () => {
    const tabData: TabData[] = [
      { title: '탭1', children: '내용' },
      { title: '탭2', children: <div>내용2</div> },
    ];
    render(<EasyTab data={tabData} />);
    await userEvent.click(screen.getByText(/탭2/i));
    await expect(await screen.getByText(/내용2/i));
    await userEvent.click(screen.getByText(/탭1/i));
    await expect(await screen.getByText(/내용/i));
  });
});
