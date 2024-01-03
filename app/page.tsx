// export const metadata = {
//   title: 'App Router',
// };
'use client';

import { SideMenu } from './SideMenu';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Page() {
  return (
    <>
      {/* <h1>App Router</h1> */}
      <SideMenu />
    </>
  );
}
