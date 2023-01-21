import React from 'react';

import styles from '@/styles/Extras.module.css';

import { ArrowDown, ArrowUp, BalanceContainer } from '@/components/icons/Icons';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Wallet = () => {
  return (
    <Layout>
      <Seo title='Wallet' />
      <div className='flex h-full w-full flex-col items-center justify-center p-3 lg:p-10 xl1400:p-14 xxl3100:p-[130px]'>
        <div className='flex h-full w-full flex-col items-center justify-center rounded-[18px] bg-bgPredictions shadow-predictions lg:rounded-[40px]'>
          <div className='flex h-[85%] max-h-[500px] w-[80%] flex-col items-center justify-evenly lg:w-[55%] lg:justify-between xxl3100:max-h-[2000px] xxl3100:justify-center '>
            <BalanceContainer className='mb-5 h-[40%] w-full lg:mb-0 lg:h-[50%] lg:w-[65%] xxl3100:h-[45%] xxl3100:w-[50%] ' />
            <input
              type='number'
              placeholder='Enter topup/withdraw amount'
              className={`${styles.input} -mt-[60px] box-border h-[55px] w-full min-w-[200px] max-w-[320px] pl-5 text-black placeholder:text-[1rem] lg:-mt-5 lg:w-[85%] xxl3100:mt-[100px] xxl3100:h-[90px] xxl3100:w-[80%] xxl3100:max-w-[600px] xxl3100:pl-[50px] xxl3100:placeholder:text-[2rem]`}
            />
            <div className='mt-2 flex h-[20%] w-full items-center justify-evenly lg:w-1/2 xxl3100:mt-[60px] xxl3100:w-[50%]'>
              <div className='flex h-auto w-auto flex-col items-center justify-start'>
                <button
                  className={`${styles.button} flex h-[80px] w-[80px] items-center justify-center  rounded-[25px] xxl3100:h-[150px] xxl3100:w-[150px] xxl3100:rounded-[50px]`}
                >
                  <ArrowUp />
                </button>
                <span className='mt-1 cursor-pointer font-poppins text-[1.1rem] font-[400] text-white xxl3100:mt-4 xxl3100:text-[2rem]'>
                  TopUp
                </span>
              </div>
              <div className='ml-3 flex h-auto w-auto flex-col items-center justify-start'>
                <button
                  className={`${styles.button} flex h-[80px] w-[80px] items-center justify-center  rounded-[25px] xxl3100:h-[150px] xxl3100:w-[150px] xxl3100:rounded-[50px]`}
                >
                  <ArrowDown />
                </button>
                <span className='mt-1 cursor-pointer font-poppins text-[1.1rem] font-[400] text-white xxl3100:mt-4 xxl3100:text-[2rem]'>
                  Withdraw
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
