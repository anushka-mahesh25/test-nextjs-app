import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
  test('SideMenu icon renders correctly', () => {
    const { getByTestId } = render(<SideMenu />);
    const hamburgerButton = getByTestId('btn-hamburger');
    expect(hamburgerButton).toBeInTheDocument();
  });

  test('Clicking on the hamburger icon toggles the menu', async () => {
    render(<SideMenu />);
    const hamburgerButton = screen.getByTestId('btn-hamburger');
    fireEvent.click(hamburgerButton);
    const AccordionTitle = screen.getByText('Branch Management');
    expect(AccordionTitle).toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(AccordionTitle).not.toBeInTheDocument();
  });
});
