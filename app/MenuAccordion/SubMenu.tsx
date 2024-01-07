import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { SubMenuItem } from './MenuAccordion';
import defaultStyles from './MenuAccordion.module.scss';

interface SubMenuProps {
  subMenu: SubMenuItem;
  styles: Record<string, string>;
}

const SubMenu = ({ subMenu, styles }: SubMenuProps) => (
  <Link href={subMenu.link} className={classNames(defaultStyles.menuLink, styles?.menuLink)}>
    <li  className={classNames(defaultStyles.menuItem, styles?.menuItem)} key={subMenu.id}>
      {subMenu.title}
    </li>
  </Link>
);

export default SubMenu;
