import React from 'react';

import styles from '@/styles/Extras.module.css';

import { ArrowDown, ArrowUp, BalanceContainer } from '@/components/icons/Icons';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Wallet = () => {
  return (
    <Layout>
      <Seo title='Wallet' />
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='flex h-[90%] max-h-[500px] w-[55%] flex-col items-center justify-between'>
          <BalanceContainer className='h-[55%] w-[70%]' />
          <input
            type='number'
            placeholder='Enter topup/withdraw amount'
            className={`${styles.input} box-border h-[55px] w-[85%] min-w-[200px] max-w-[320px] pl-5 text-black`}
          />
          <div className='mt-2 flex h-[20%] w-1/2 items-center justify-evenly'>
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
    </Layout>
  );
};

export default Wallet;
