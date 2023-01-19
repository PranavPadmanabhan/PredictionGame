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
      <div className='z-[100] flex h-[50%] w-full flex-col items-start justify-center  px-10'>
        <h1 className='font-poppins text-[3.5rem] font-extrabold text-button drop-shadow-text xl1400:text-[4.5rem] '>
          Predict and Win
        </h1>
        <p className='my-5 ml-1 font-poppins text-[1.2rem] font-[400] leading-7 text-white xl1400:my-8 xl1400:text-[1.5rem] xl1400:leading-8 '>
          users can predict the exchange rate of
          <br /> ETH/USD at a specific time and gives them tokens
          <br /> based on closeness to the actual prize
        </p>
        <button
          onClick={() => router.push('/contests')}
          className='h-[40px] w-[30%] max-w-[150px] rounded-[50px] bg-button font-poppins text-[1rem] text-white xl1400:h-[50px] xl1400:max-w-[180px] xl1400:text-[1.1rem]'
        >
          Start predicting
        </button>
      </div>
    </div>
  );
}
