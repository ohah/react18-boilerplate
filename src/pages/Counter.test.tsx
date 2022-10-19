import { render, screen } from '@testing-library/react';
import Counter from './Counter';
describe('<Counter />', () => {
  it('show text', () => {
    render(<Counter />);
    const initialState = screen.getByText('카운트: 0');

    expect(initialState).toBeInTheDocument();
  });
});
