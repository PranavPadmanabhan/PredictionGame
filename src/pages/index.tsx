import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import * as React from 'react';

import styles from '@/styles/Extras.module.css';

import Header from '@/components/Header';
import Seo from '@/components/Seo';

import cryptoAnimation from '../../public/lottie/crypto.json';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-backgroundColor pt-[13vh] md:pt-[10vh] lg:justify-center lg:pt-0'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header className='pr-[2%]' />
      <Lottie
        className='absolute bottom-0 -mt-3 -mb-[30%] h-[78%] w-[140%] md:-mb-[20%] lg:right-0 lg:mb-0 lg:mt-0 lg:h-[80%] lg:w-[60%]'
        animationData={cryptoAnimation}
        loop={true}
      />
      <div className='z-[100] flex h-[40%] w-full flex-col items-center justify-center px-10 lg:h-[50%] lg:items-start xxl3100:px-[200px]'>
        <h1
          className={`${styles.text1} flex text-center font-poppins text-[3rem] font-extrabold leading-[45px] text-button drop-shadow-text md:text-[5.5rem] md:drop-shadow-textmd lg:text-[3.5rem] lg1300:text-[4.2rem] xl1400:text-[4.5rem] xl1500:text-[6rem] xl1900:text-[7rem] xxl3100:text-[12rem] xxl3100:drop-shadow-textlg`}
        >
          Predict&nbsp; <span className='hidden lg:block'>and</span>
          <span className='block lg:hidden'>&</span> &nbsp;Win
        </h1>
        <p
          className={`${styles.text2} my-5 ml-1 text-center font-poppins text-[0.9rem] font-[300] tracking-tight text-white md:my-10 md:max-w-[80%] md:text-[1.5rem] md:leading-7 lg:my-8 lg:text-left lg:text-[1.2rem] lg:leading-7 xl1400:my-8 xl1400:text-[1.5rem] xl1400:leading-8 xxl3100:my-[100px] xxl3100:text-[3rem] xxl3100:leading-[70px]`}
        >
          users can predict the exchange rate of
          <br className='hidden lg:flex' /> various crypto currencies at a
          specific time and win prizes
          <br className='hidden lg:flex' /> based on closeness to the actual
          prize
        </p>
        <button
          onClick={() => router.push('/contests')}
          className={`${styles.start} h-[41px] w-[60%] max-w-[200px] rounded-[55px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[250px] md:text-[1.2rem] lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[50px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2.5rem]`}
        >
          Start predicting
        </button>
      </div>
    </div>
  );
}

// 980 - 1500 -portrait

//  500 - 980
