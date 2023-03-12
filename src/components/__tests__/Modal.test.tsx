import { act, fireEvent, render } from '@testing-library/react';
import { Modal } from 'components';
import { useState } from 'react';

const ModalTest = ({ value = true }: { value: boolean }) => {
  const [isOpen, setIsOpen] = useState(value);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        토글
      </button>
      <div data-testId="test-modal">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header> 헤더</Modal.Header>
          <Modal.Body> 바디 </Modal.Body>
          <Modal.Footer> 푸터 </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

describe('모달 테스트', () => {
  test('열기', async () => {
    const { getByText } = render(<ModalTest value={false} />);
    await fireEvent.click(getByText(/토글/i));
    await act(async () => {
      await expect(await getByText(/바디/i)).toBeInTheDocument();
    });
  });
  test('닫기', async () => {
    const { getByText, getByTestId } = render(<ModalTest value />);
    await fireEvent.click(getByText(/토글/i));
    await act(async () => {
      await expect(getByTestId('test-modal').childElementCount === 0).toBe(true);
    });
  });
});
