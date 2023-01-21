import React from 'react';

import styles from '@/styles/Extras.module.css';

import { ArrowDown, ArrowUp, EtherIcon } from '@/components/icons/Icons';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useAppContext } from '@/contexts/AppContext';

const Wallet = () => {
  const { isTxModalOpen, setIsTxModalOpen } = useAppContext();

  const topUpWallet = async () => {
    setIsTxModalOpen(true);
  };

  const withdrawFromWallet = async () => {
    setIsTxModalOpen(true);
  };

  return (
    <Layout>
      <Seo title='Wallet' />
      <div className='relative flex h-full w-full flex-col items-center justify-center p-3 lg:p-10 xl1400:p-14 xxl3100:p-[130px]'>
        <div className='flex h-full w-full flex-col items-center justify-center rounded-[18px] bg-bgPredictions shadow-predictions lg:rounded-[40px]'>
          <div className='flex h-[85%] max-h-[500px] w-[80%] flex-col items-center justify-evenly lg:w-[55%] lg:justify-between xxl3100:max-h-[2000px] xxl3100:justify-center '>
            <div className='mb-8 flex h-[40%] w-[100%] items-center justify-center bg-wallet bg-cover bg-center bg-no-repeat lg:mb-0 lg:h-[50%] lg:w-[55%]'>
              <div className='flex h-[50%] w-[70%] items-center justify-start'>
                <EtherIcon className='lg:mr-1 lg:h-[20%] lg:max-h-[70px] lg:min-h-[40px] lg:w-[20%] lg:min-w-[40px] lg:max-w-[70px]' />
                <h1 className='font-poppins text-[1.5rem] font-bold text-white'>
                  1.2133 ETH
                </h1>
              </div>
            </div>
            <input
              type='number'
              placeholder='Enter topup/withdraw amount'
              className={`${styles.input} -mt-[60px] box-border h-[55px] w-full min-w-[200px] max-w-[320px] pl-5 text-black placeholder:text-[1rem] lg:-mt-5 lg:w-[85%] xxl3100:mt-[100px] xxl3100:h-[90px] xxl3100:w-[80%] xxl3100:max-w-[600px] xxl3100:pl-[50px] xxl3100:placeholder:text-[2rem]`}
            />
            <div className='mt-2 flex h-[20%] w-full items-center justify-evenly lg:w-1/2 xxl3100:mt-[60px] xxl3100:w-[50%]'>
              <div className='flex h-auto w-auto flex-col items-center justify-start'>
                <button
                  onClick={topUpWallet}
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
                  onClick={withdrawFromWallet}
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
