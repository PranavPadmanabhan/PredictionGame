import * as React from 'react';

import BottomTabs from '@/components/bottomtabs/BottomTabs';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import PopUpScreen from '@/components/PopUpScreen';
import SideBar from '@/components/sidebar/SideBar';

import { useAppContext } from '@/contexts/AppContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isTxModalOpen, rank, txStatus } = useAppContext();
  // Put Header or Footer Here
  return (
    <div className='flex h-[100vh] w-[100vw] items-center justify-start bg-backgroundColor '>
      {rank > 0 && <PopUpScreen rank={rank} />}
      <SideBar />
      <div className='relative flex h-full w-full flex-col items-center justify-center bg-transparent pt-[8vh] pb-[50px] lg:pb-0'>
        <Header showBalance />
        <div className='relative flex h-[92%] w-[90%] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-pageBg lg:rounded-[50px] xxl3800:rounded-[100px]'>
          {children}
          {isTxModalOpen && <Modal status={txStatus} />}
        </div>
      </div>
      <BottomTabs />
    </div>
  );
}
