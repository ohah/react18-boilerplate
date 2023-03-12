import { fireEvent, render, renderHook } from '@testing-library/react';
import { EasyListBox } from 'components/Easy';
import { useState } from 'react';
describe('이지 탭 테스트', () => {
  test('탭 클릭시 값이 변하는지 확인', async () => {
    const data = [
      { title: '툴팁', value: '툴팁' },
      { title: '패널', value: '패널' },
      { title: '드롭다운', value: '드롭다운' },
      { title: '토글', value: '토글' },
      { title: '페이지네이션', value: '페이지네이션' },
      { title: '모달', value: '모달' },
      { title: '토스트', value: '토스트' },
    ];
    const [selectedData, setSelectedData] = renderHook(() => useState(data[1])).result.current;
    const onChange = jest.fn(setSelectedData);
    const { getByText, container } = render(<EasyListBox value={selectedData} onChange={onChange} data={data} />);
    const button = container.querySelector('button');
    if (button) {
      await fireEvent.click(await button);
      await fireEvent.click(await getByText(/드롭다운/i));
      await fireEvent.click(await button);
      await fireEvent.click(await getByText(/토글/i));
      expect(onChange.mock.calls[0][0]).toEqual(data[2]);
      expect(onChange.mock.calls[1][0]).toEqual(data[3]);
    }
  });
});
