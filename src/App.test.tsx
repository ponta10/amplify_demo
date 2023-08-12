import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // 例としてのダミーのプロップ
  const dummySignOut = () => {};
  const dummyUser = { username: 'test-user' };

  render(<App signOut={dummySignOut} user={dummyUser} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
