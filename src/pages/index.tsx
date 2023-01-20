import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import * as React from 'react';

import Header from '@/components/Header';
import Seo from '@/components/Seo';

import cryptoAnimation from '../../public/lottie/crypto.json';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-backgroundColor'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header className='pr-[2%]' />
      <Lottie
        className='absolute bottom-0 right-0 h-[80%] w-[60%]'
        animationData={cryptoAnimation}
        loop={true}
      />
      <div className='z-[100] flex h-[50%] w-full flex-col items-start justify-center px-10 xxl3100:px-[200px] '>
        <h1 className='font-poppins text-[3.5rem] font-extrabold text-button drop-shadow-text lg1300:text-[3rem] xl1400:text-[4.5rem] xl1500:text-[6rem] xl1900:text-[7rem] xxl3100:text-[12rem] xxl3100:drop-shadow-textlg'>
          Predict and Win
        </h1>
        <p className='my-5 ml-1 font-poppins text-[1.2rem] font-[400] leading-7 tracking-tight text-white xl1400:my-8 xl1400:text-[1.5rem] xl1400:leading-8 xxl3100:my-[100px] xxl3100:text-[3rem] xxl3100:leading-[70px]'>
          users can predict the exchange rate of
          <br /> various crypto currencies at a specific time and win prizes
          <br /> based on closeness to the actual prize
        </p>
        <button
          onClick={() => router.push('/contests')}
          className='h-[40px] w-[30%] max-w-[150px] rounded-[50px] bg-button font-poppins text-[1rem] text-white xl1400:h-[50px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2.5rem]'
        >
          Start predicting
        </button>
      </div>
    </div>
  );
}
