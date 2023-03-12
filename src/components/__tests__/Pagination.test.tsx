import { fireEvent, render } from '@testing-library/react';
import { Pagination } from 'components';

describe('페이지네이션 테스트', () => {
  const onChange = jest.fn();
  test('페이지클릭 테스트', async () => {
    const { getByText } = render(
      <Pagination total={300} pageLimit={10} current={5} pageSize={1} onChange={onChange} />,
    );
    fireEvent.click(await getByText(/7/));
    expect(onChange.mock.calls[0][0]).toStrictEqual(5);
    expect(onChange.mock.calls[1][0]).toStrictEqual(7);
  });
});
