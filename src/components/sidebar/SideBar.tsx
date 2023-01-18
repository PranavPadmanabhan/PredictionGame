import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { sideBarLinks } from '@/constant/links';

const SideBar = () => {
  const router = useRouter();
  return (
    <div className='box-border flex h-full w-[20%] min-w-[250px] max-w-[450px] flex-col items-start justify-between bg-transparent pt-6 pl-4'>
      <div className='flex h-[15%] w-full items-center justify-center'>
        <h1 className='self-center bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent'>
          Prediction
        </h1>
      </div>
      <div className='box-border flex h-[65%] w-full flex-col items-start justify-center pl-3'>
        {sideBarLinks.map((link) => (
          <div
            onClick={() => router.push(`${link.url}`)}
            key={link.id}
            className={`my-2 flex h-[50px] w-full items-center justify-start ${
              link.label === 'Contests' ? 'gap-x-4' : 'gap-x-6'
            } cursor-pointer `}
          >
            <Image
              height={link.label === 'Contests' ? 35 : 25}
              width={link.label === 'Contests' ? 35 : 25}
              src={router.pathname === link.url ? link.active : link.icon}
              alt=''
              className={`${link.label === 'Contests' ? '-ml-1' : 'ml-0'}`}
            />
            <h1
              className={`font-poppins text-[1.25rem] font-[700] ${
                router.pathname === link.url
                  ? 'text-activeSideBarTextColor'
                  : 'text-sideBarTextColor'
              }`}
            >
              {link.label}
            </h1>
          </div>
        ))}
      </div>
      <div className='h-[15%] w-full'></div>
    </div>
  );
};

export default SideBar;
