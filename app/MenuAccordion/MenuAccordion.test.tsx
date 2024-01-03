import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import MenuAccordion, { AccordionProps } from './MenuAccordion';
import userEvent from '@testing-library/user-event';

const mockAccordionData: AccordionProps['data'] = [
  {
    id: '1',
    icon: 'Warning',
    link: '/link1',
    subMenu: [
      { id: '1-1', link: '/link1-1', title: 'SubMenu 1-1' },
      { id: '1-2', link: '/link1-2', title: 'SubMenu 1-2' },
    ],
    title: 'Accordion 1',
  },
  {
    id: '2',
    icon: 'MoneyBill',
    link: '/link2',
    subMenu: [
      { id: '2-1', link: '/link2-1', title: 'SubMenu 2-1' },
      { id: '2-2', link: '/link2-2', title: 'SubMenu 2-2' },
    ],
    title: 'Accordion 2',
  },
];

describe('MenuAccordion', () => {
  test('renders accordion items', () => {
    render(<MenuAccordion data={mockAccordionData} />);
    const accordionItems = screen.getAllByRole('button', { name: /Accordion \d/i });
    expect(accordionItems).toHaveLength(mockAccordionData.length);
  });

  test('expands the accordion with defaultId', () => {
    const defaultId = '1';
    render(<MenuAccordion data={mockAccordionData} defaultId={defaultId} />);

    const submenuItem1 = screen.getByText('SubMenu 1-1');
    const submenuItem2 = screen.getByText('SubMenu 1-2');

    expect(submenuItem1).toBeInTheDocument();
    expect(submenuItem2).toBeInTheDocument();
  });

  test('expands and collapses accordion panels on header click', async () => {
    render(<MenuAccordion data={mockAccordionData} />);
    const accordionItems = screen.getAllByRole('button', { name: /Accordion \d/i });
    userEvent.click(accordionItems[0]);

    expect(accordionItems[0]).toHaveAttribute('aria-expanded', 'true');
    expect(accordionItems[1]).toHaveAttribute('aria-expanded', 'false');

    userEvent.click(accordionItems[1]);
    await waitFor(() => {
      expect(accordionItems[0]).toHaveAttribute('aria-expanded', 'false');
      expect(accordionItems[1]).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('should render with icons when showIcons is true', () => {
    act(() => {
      render(<MenuAccordion data={mockAccordionData} showIcons={true} />);
    });

    const dynamicIcon = screen.getByTestId('dynamic-icon');
    expect(dynamicIcon).toBeInTheDocument();
  });

  it('should render without icons when showIcons is false', () => {
    act(() => {
      render(<MenuAccordion data={mockAccordionData} showIcons={false} />);
    });

    const dynamicIcon = screen.queryByTestId('dynamic-icon');
    expect(dynamicIcon).not.toBeInTheDocument();
  });
});
