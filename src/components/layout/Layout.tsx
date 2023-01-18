import * as React from 'react';

import Header from '@/components/Header';
import SideBar from '@/components/sidebar/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex h-[100vh] w-[100vw] items-center justify-start bg-backgroundColor '>
      <SideBar />
      <div className='relative flex h-full w-full flex-col items-center justify-center bg-transparent pt-[10vh]'>
        <Header />
        <div className='flex h-[90%] w-[90%] flex-col items-center justify-center rounded-[50px] bg-pageBg '>
          {children}
        </div>
      </div>
    </div>
  );
}
