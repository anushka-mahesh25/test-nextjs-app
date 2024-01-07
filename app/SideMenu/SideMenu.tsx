// SideMenu.tsx

// Import the necessary libraries and components
import React, { useEffect, useRef, useState } from 'react';
import { IconButton, SvgIcon } from '@mui/material';
import classNames from 'classnames';
import MenuAccordion from '../MenuAccordion';
import defaultStyles from './SideMenu.module.scss';
import MenuListMockData from './MenuListMockData.json';

// SideMenu component
const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuListData = MenuListMockData;
  const refDrawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuOpen && refDrawer.current && !refDrawer.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ref={refDrawer}
        className={defaultStyles.menuContainer}>
        <IconButton
          id="btn-hamburger"
          data-testid="btn-hamburger"
          className={classNames(
            'text-gray-500 hover:text-gray-600 sidebarBtnCss',
            defaultStyles.hamburgerButton,
          )}
          aria-controls="sidebar"
          onClick={() => setMenuOpen((open) => !open)}
          data-cy="leftTab">
          <SvgIcon id="svg-hamburger" sx={{ width: 40, height: 40 }} viewBox="4 4 24 24">
            <rect x="4" y="5" width="16" height="2" />
            <rect x="4" y="11" width="16" height="2" />
            <rect x="4" y="17" width="16" height="2" />
          </SvgIcon>
        </IconButton>
        {menuOpen && menuListData && <MenuAccordion data={menuListData} styles={defaultStyles} showIcons  />}
      </div>
    </>
  );
};

export default SideMenu;
