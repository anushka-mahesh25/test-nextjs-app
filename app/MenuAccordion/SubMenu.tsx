import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { SubMenuItem } from './MenuAccordion';

interface SubMenuProps {
  subMenu: SubMenuItem;
  styles: Record<string, string>;
}

const SubMenu = ({ subMenu, styles }: SubMenuProps) => (
  <Link href={subMenu.link}>
    <li className={classNames(styles.menuItem)} key={subMenu.id}>
      {subMenu.title}
    </li>
  </Link>
);

export default SubMenu;
