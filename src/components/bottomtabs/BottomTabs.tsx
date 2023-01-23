import { useRouter } from 'next/router';
import React from 'react';

import { bottomNavLinks } from '@/constant/links';
import { useAppContext } from '@/contexts/AppContext';

const BottomTabs = () => {
  const router = useRouter();
  const { isTxModalOpen } = useAppContext();
  return (
    <div className='fixed bottom-0 box-border flex h-[65px] w-full items-center justify-between overflow-hidden border-t-[1px] border-t-tabBorder  bg-backgroundColor px-5 pl-8  lg:hidden'>
      {bottomNavLinks.map(({ icon: Icon, label, id, url }) => (
        <Icon
          key={id}
          onClick={() => router.push(`${url}`)}
          color={
            router.pathname.includes(url)
              ? '#02FFF0'
              : 'rgba(255, 255, 255, 0.5)'
          }
          className='scale-90'
          size={label === 'Your Predictions' ? 38 : 35}
          variant='Bold'
        />
      ))}
      {isTxModalOpen && (
        <div className='bottom-0-0 absolute left-0 h-full w-full bg-transparent'></div>
      )}
    </div>
  );
};

export default BottomTabs;
