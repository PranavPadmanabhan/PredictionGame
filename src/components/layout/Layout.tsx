import * as React from 'react';

import Header from '@/components/Header';
import SideBar from '@/components/sidebar/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex h-[100vh] w-[100vw] items-center justify-start bg-backgroundColor '>
      <SideBar />
      <div className='relative flex h-full w-full flex-col items-center justify-center bg-transparent pt-[8vh]'>
        <Header />
        <div className='flex h-[92%] w-[90%] flex-col items-center justify-center overflow-hidden rounded-[50px] bg-pageBg xxl3800:rounded-[100px]'>
          {children}
        </div>
      </div>
    </div>
  );
}
