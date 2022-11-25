import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

function sum(a: number, b: number) {
  return a + b;
}

describe('<Component />', () => {
  it('Should make any action ts', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('Testint react testing library', () => {
    render(<Header />);

    expect(screen.getByText('header')).toBeInTheDocument();
  });
});
