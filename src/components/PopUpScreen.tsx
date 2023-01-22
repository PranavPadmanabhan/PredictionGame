/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';
import React from 'react';

import { useAppContext } from '@/contexts/AppContext';

type PopUp = {
  rank?: number;
};

const PopUpScreen = ({ rank }: PopUp) => {
  const getRank = (number: number) => {
    switch (number) {
      case 1:
        return '/svg/first.svg';
      case 2:
        return '/svg/2nd.svg';
      case 3:
        return '/svg/3.svg';
      case 4:
        return '/svg/4.svg';
      case 5:
        return '/svg/5.svg';
      case 6:
        return '/svg/6.svg';
      case 7:
        return '/svg/7.svg';
      case 8:
        return '/svg/8.svg';
      case 9:
        return '/svg/9.svg';
      case 10:
        return '/svg/10.svg';
      default:
        return '/svg/first.svg';
    }
  };

  const { setRank } = useAppContext();

  return (
    <div
      onClick={() => setRank(0)}
      className='fixed top-0 z-[1000] flex h-screen w-screen cursor-pointer items-center justify-center bg-bgPopUp backdrop-blur-[10px] backdrop-brightness-50 '
    >
      <div className='relative flex h-full  max-h-[70vh] w-full flex-col items-center justify-center bg-lights bg-cover bg-center bg-no-repeat lg:max-h-[80vh] lg:max-w-[65vw] '>
        <h1 className='absolute top-[2%] font-poppins text-[2rem] font-bold text-white bg-blend-screen md:text-[3rem] lg:text-[3rem] xxl3100:top-[5%] xxl3100:text-[8rem] '>
          Congratulations
        </h1>
        <Image
          src={getRank(rank!)}
          height={220}
          width={220}
          alt=''
          className='lg:scale-125 xxl3100:scale-[2.9]'
        />
        <h1 className='absolute bottom-[20%] font-poppins text-[1rem] font-bold text-white md:text-[2rem] lg:bottom-[15%] lg:text-[2rem]  xxl3100:bottom-[23%] xxl3100:text-[4rem] '>
          You won the {rank}
          {rank === 1 && 'st'}
          {rank === 2 && 'nd'}
          {rank === 3 && 'rd'}
          {rank! > 3 && 'th'} Prize
        </h1>
      </div>
    </div>
  );
};

export default PopUpScreen;
