import { useRouter } from 'next/router';
import React from 'react';

import { sideBarLinks } from '@/constant/links';

const BottomTabs = () => {
  const router = useRouter();
  return (
    <div className='fixed bottom-0 box-border flex h-[70px] w-full items-center justify-between overflow-hidden rounded-t-[30px] bg-cardGradient1 px-5 pl-8 shadow-card drop-shadow-card lg:hidden'>
      {sideBarLinks.map(({ icon: Icon, id, url }) => (
        <Icon
          key={id}
          onClick={() => router.push(`${url}`)}
          active={router.pathname === url}
        />
      ))}
    </div>
  );
};

export default BottomTabs;
