import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('Text', () => {
    render(<Profile />);
    expect(screen.getByText('프로필')).toBeInTheDocument();
  });
});
