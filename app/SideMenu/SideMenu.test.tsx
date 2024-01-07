import React from 'react';
import { render, fireEvent,waitFor,screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('MenuAccordion', () => {
    
  test('SideMenu icon renders correctly', () => {
    const { getByTestId } = render(<SideMenu />);
    const hamburgerButton = getByTestId('btn-hamburger');
    expect(hamburgerButton).toBeInTheDocument();
  });
  
  test('Clicking on the hamburger icon toggles the menu', async () => {
    render(<SideMenu />);
  
    // Check if MenuAccordion is initially not rendered
    expect(screen.queryByTestId('menu-accordion')).toBeNull();
  
    const hamburgerButton = screen.getByTestId('btn-hamburger');
  
    // Simulate a click on the hamburger icon
    fireEvent.click(hamburgerButton);

    console.log('MenuAccordion after 2nd click:', screen.queryByTestId('menu-accordion'));
  
    // Wait for the MenuAccordion to appear
    await waitFor(() => {
      expect(screen.getByTestId('menu-accordion')).toBeInTheDocument();
    });
  });

});

