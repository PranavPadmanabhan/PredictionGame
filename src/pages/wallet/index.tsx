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
          <div className='flex h-[85%] max-h-[500px] w-[80%] flex-col items-center justify-evenly lg:w-[55%] lg:justify-between'>
            <BalanceContainer className='mb-5 h-[40%] w-full lg:mb-0 lg:h-[50%] lg:w-[65%]' />
            <input
              type='number'
              placeholder='Enter topup/withdraw amount'
              className={`${styles.input} -mt-[60px] box-border h-[55px] w-full min-w-[200px] max-w-[320px] pl-5 text-black placeholder:text-[1rem] lg:-mt-5 lg:w-[85%]`}
            />
            <div className='mt-2 flex h-[20%] w-full items-center justify-evenly lg:w-1/2'>
              <div className='flex h-auto w-auto flex-col items-center justify-start'>
                <button
                  className={`${styles.button} flex h-[80px] w-[80px] items-center justify-center rounded-[25px]`}
                >
                  <ArrowUp />
                </button>
                <span className='mt-1 cursor-pointer font-poppins text-[1.1rem] font-[400] text-white'>
                  TopUp
                </span>
              </div>
              <div className='ml-3 flex h-auto w-auto flex-col items-center justify-start'>
                <button
                  className={`${styles.button} flex h-[80px] w-[80px] items-center justify-center rounded-[25px]`}
                >
                  <ArrowDown />
                </button>
                <span className='mt-1 cursor-pointer font-poppins text-[1.1rem] font-[400] text-white'>
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
