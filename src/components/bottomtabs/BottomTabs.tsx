import { useRouter } from 'next/router';
import React from 'react';

import { sideBarLinks } from '@/constant/links';
import { useAppContext } from '@/contexts/AppContext';

const BottomTabs = () => {
  const router = useRouter();
  const { isTxModalOpen } = useAppContext();
  return (
    <div className='fixed bottom-0 box-border flex h-[70px] w-full items-center justify-between overflow-hidden rounded-t-[30px] bg-cardGradient1 px-5 pl-8 shadow-card drop-shadow-card lg:hidden'>
      {sideBarLinks.map(({ icon: Icon, id, url }) => (
        <Icon
          key={id}
          onClick={() => router.push(`${url}`)}
          active={router.pathname === url}
        />
      ))}
      {isTxModalOpen && (
        <div className='bottom-0-0 absolute left-0 h-full w-full bg-transparent'></div>
      )}
    </div>
  );
};

export default BottomTabs;
