import { useEffect, useRef, useState } from 'react';
import { IconButton, SvgIcon, Typography } from '@mui/material'; // Import Typography from MUI
import MenuAccordion from '../MenuAccordion';

import styles from './SideMenu.module.scss';
import MenuListMockData from './MenuListMockData.json';

/**
 * SideMenu component
 */

export const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuListData = MenuListMockData;
  // useGetBranchConfig('menu')?.data;

  const refDrawer = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuOpen && refDrawer.current && !refDrawer.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ref={refDrawer}>
        <IconButton
          id="btn-hamburger"
          className="text-gray-500 hover:text-gray-600 sidebarBtnCss"
          aria-controls="sidebar"
          onClick={() => setMenuOpen((open) => !open)}
          data-cy="leftTab">
          <SvgIcon id="svg-hamburger" sx={{ width: 40, height: 40 }} viewBox="4 4 24 24">
            <rect x="4" y="5" width="16" height="2" />
            <rect x="4" y="11" width="16" height="2" />
            <rect x="4" y="17" width="16" height="2" />
          </SvgIcon>
        </IconButton>
        {menuListData && <MenuAccordion data={menuListData} showIcons />}
      </div>
    </>
  );
};

export default SideMenu;
