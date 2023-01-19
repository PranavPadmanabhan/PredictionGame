import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { sideBarLinks } from '@/constant/links';

const SideBar = () => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className='box-border flex h-full w-[20%] min-w-[250px] max-w-[450px] flex-col items-start justify-between bg-transparent pt-6 pl-4'>
      <div className='flex h-[15%] w-full items-center justify-center'>
        <h1 className='self-center bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent'>
          Prediction
        </h1>
      </div>
      <div className='box-border flex h-[65%] w-full flex-col items-start justify-center pl-3'>
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
