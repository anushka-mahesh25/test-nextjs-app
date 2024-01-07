import React, { useEffect, useRef, useState } from 'react';
import { HamburgerIcon } from '../Icons';

import MenuAccordion from '../MenuAccordion';
import defaultStyles from './SideMenu.module.scss';
import MenuListMockData from './MenuListMockData.json';

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
      <div ref={refDrawer} className={defaultStyles.menuContainer}>
        <div
          id="btn-hamburger"
          data-testid="btn-hamburger"
          aria-controls="sidebar"
          className={defaultStyles.hamburgerButton}
          onClick={() => setMenuOpen((open) => !open)}>
          <HamburgerIcon className="hamburger" />
        </div>
        {menuOpen && <MenuAccordion data={menuListData} styles={defaultStyles} showIcons />}
      </div>
    </>
  );
};

export default SideMenu;
