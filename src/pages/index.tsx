import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import * as React from 'react';

import Header from '@/components/Header';
import Seo from '@/components/Seo';

import cryptoAnimation from '../../public/lottie/crypto.json';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-backgroundColor pt-[16vh] lg:justify-center lg:pt-0'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header className='pr-[2%]' />
      <Lottie
        className='absolute bottom-0 -mt-3 h-[50%] lg:right-0 lg:mt-0 lg:h-[80%] lg:w-[60%]'
        animationData={cryptoAnimation}
        loop={true}
      />
      <div className='z-[100] flex h-[40%] w-full flex-col items-start justify-center px-10 lg:h-[50%] xxl3100:px-[200px]'>
        <h1 className='font-poppins text-[3.2rem] font-extrabold leading-[45px] text-button drop-shadow-text lg:text-[3.5rem] lg1300:text-[4.2rem] xl1400:text-[4.5rem] xl1500:text-[6rem] xl1900:text-[7rem] xxl3100:text-[12rem] xxl3100:drop-shadow-textlg'>
          Predict and Win
        </h1>
        <p className='my-5 ml-1 font-poppins text-[0.9rem] font-[400] tracking-tight text-white lg:text-[1.2rem] lg:leading-7 xl1400:my-8 xl1400:text-[1.5rem] xl1400:leading-8 xxl3100:my-[100px] xxl3100:text-[3rem] xxl3100:leading-[70px]'>
          users can predict the exchange rate of
          <br /> various crypto currencies at a specific time and win prizes
          <br /> based on closeness to the actual prize
        </p>
        <button
          onClick={() => router.push('/contests')}
          className='h-[35px] w-[50%] max-w-[180px] rounded-[50px] bg-button font-poppins text-[0.9rem] text-white lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[50px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2.5rem]'
        >
          Start predicting
        </button>
      </div>
    </div>
  );
}
