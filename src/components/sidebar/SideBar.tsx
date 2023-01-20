import { useRouter } from 'next/router';
import React from 'react';

import { sideBarLinks } from '@/constant/links';

const SideBar = () => {
  const router = useRouter();
  return (
    <div className='box-border flex h-full w-[20%] min-w-[250px] max-w-[450px] flex-col items-start justify-between bg-transparent pt-6 pl-4 xxl3800:min-w-[350px] xxl3800:max-w-[800px] xxl3800:pl-[50px]'>
      <div className='flex h-[15%] w-full items-center justify-center '>
        <h1 className='self-center bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text pt-0 text-3xl font-extrabold text-transparent xxl3800:h-full xxl3800:w-full xxl3800:pt-[30%] xxl3800:text-[7rem]'>
          Prediction
        </h1>
      </div>
      <div className='box-border flex h-[65%] w-full flex-col items-start justify-center pl-3 xxl3800:pl-[50px] '>
        {sideBarLinks.map(({ icon: Icon, id, label, url }) => (
          <Icon
            key={id}
            onClick={() => router.push(`${url}`)}
            title={label}
            active={router.pathname === url}
          />
        ))}
      </div>
      <div className='h-[15%] w-full'></div>
    </div>
  );
};

export default SideBar;
