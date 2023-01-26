/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react';
import { useAccount, useContractRead } from 'wagmi';

import styles from '@/styles/Extras.module.css';

import { ArrowDown, ArrowUp, EtherIcon } from '@/components/icons/Icons';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { abi, contractAddress } from '@/constant/constants';
import { useAppContext } from '@/contexts/AppContext';

const Wallet = () => {
  const { isTxModalOpen, setIsTxModalOpen, width } = useAppContext();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const topUpWallet = async () => {
    setIsTxModalOpen(true);
  };

  const withdrawFromWallet = async () => {
    setIsTxModalOpen(true);
  };

  const { data, isSuccess, isFetching, isLoading, isRefetching } =
    useContractRead({
      address: `0x${contractAddress}`,
      abi: abi,
      functionName: 'balanceOf',
      args: [address!],
    });

  const disabled = width <= 900 ? true : false;

  return (
    <Layout>
      <Seo title='Wallet' />
      <div className='relative flex h-full w-full flex-col items-center justify-center p-0 lg:p-10 xl1400:p-14 xxl3100:p-[130px]'>
        {address ? (
          <div className='flex h-full w-full flex-col items-center justify-start rounded-[18px] bg-pageBg pt-[10vh] shadow-predictions sm:pt-[18vh] lg:rounded-[40px] lg:bg-bgPredictions lg:pt-[5vh] xl1400:pt-[7vh] xl1900:pt-[10vh] xl2300:pt-[15vh] xxl3100:pt-[5vh] '>
            <div className='flex h-[85%] max-h-[500px] w-[80%] flex-col items-center justify-evenly lg:w-[55%] lg:justify-evenly xxl3100:h-[95%] xxl3100:max-h-full  xxl3100:justify-evenly'>
              <div className='flex h-[50%] min-h-[150px] w-[100%] min-w-[150px] items-center justify-center bg-wallet bg-contain bg-center bg-no-repeat sm:h-[75%] sm:min-h-[400px]  sm:w-[75%] sm:min-w-[400px] lg:h-[40%] lg:min-h-[230px] lg:w-[55%] lg:min-w-[250px]   xl1900:h-[87%] xl1900:min-h-[300px] xl1900:w-[70%] xl1900:min-w-[400px] xl2300:h-[50%] xl2300:min-h-[400px] xl2300:w-[60%] xl2300:min-w-[600px] xxl3100:h-[50%] xxl3100:min-h-[30vh] xxl3100:w-[60%]  xxl3100:min-w-[1200px]'>
                <div className='flex h-[40%] w-[50%] items-center justify-start lg:min-w-[180px]'>
                  <EtherIcon
                    className={`${
                      (isFetching || isLoading || isRefetching) &&
                      'animate-shimmer'
                    } mr-1 min-h-[40px] min-w-[40px] scale-[0.5] sm:ml-2 sm:mr-5 sm:scale-90 lg:mr-0 lg:h-[20%] lg:max-h-[70px] lg:min-h-[40px] lg:w-[20%] lg:min-w-[40px] lg:max-w-[70px] lg:scale-95 xl1900:ml-[10px] xl1900:mr-2 xl1900:scale-125 xl2300:scale-[1.7] xxl3100:ml-[80px] xxl3100:mr-4 xxl3100:scale-[2] `}
                  />
                  <h1
                    className={`whitespace-nowrap font-poppins text-[1.2rem] font-bold ${
                      isFetching || isLoading || isRefetching
                        ? 'animate-shimmer  text-gray-200'
                        : 'animate-none text-white'
                    } sm:text-[2.2rem] lg:text-[1.5rem] xl1900:text-[2rem] xl2300:text-[2.6rem] xxl3100:text-[4rem]`}
                  >
                    {isFetching || isLoading || isRefetching
                      ? '0.00 ETH'
                      : `${
                          data?.toString() == '0' ? '0.00' : data?.toString()
                        } ETH`}
                  </h1>
                </div>
              </div>
              <input
                type='number'
                disabled={disabled}
                placeholder='Enter topup/withdraw amount'
                className={`${styles.input} box-border h-[55px] w-full min-w-[200px] max-w-[320px] rounded-[15px] pl-5 text-center text-black placeholder:text-[1rem] sm:my-8 sm:min-h-[55px] sm:min-w-[450px] sm:max-w-[350px] lg:my-3 lg:h-[60px] lg:w-[85%] lg:min-w-[300px]  lg:rounded-[15px] xl1900:my-7 xl1900:h-[95px] xl1900:min-w-[500px] xl2300:h-[100px] xxl3100:my-0 xxl3100:mt-[10px] xxl3100:h-[6vh] xxl3100:w-[80%] xxl3100:min-w-[800px] xxl3100:max-w-[600px] xxl3100:rounded-[50px] xxl3100:pl-[50px] xxl3100:placeholder:text-[2rem]`}
              />
              <div className='mt-2 flex h-[20%] w-[80%] items-center justify-evenly sm:h-[40%] sm:w-[55%] lg:w-1/2 xl1900:h-[50%] xl2300:w-[40%] xxl3100:mt-0 xxl3100:h-[20%] xxl3100:w-[50%] '>
                <div className='flex h-auto w-auto flex-col items-center justify-start'>
                  <button
                    onClick={topUpWallet}
                    className={`${styles.button} flex h-[70px] w-[70px] items-center justify-center rounded-[15px] sm:h-[100px] sm:w-[100px] sm:rounded-[25px] lg:h-[80px] lg:w-[80px] lg:rounded-[25px] xl1900:h-[100px] xl1900:w-[100px] xl2300:h-[120px] xl2300:w-[120px] xl2300:rounded-[40px] xxl3100:h-[10vh] xxl3100:w-[10vh] xxl3100:rounded-[50px]`}
                  >
                    <ArrowUp className='scale-[0.65] xl1900:scale-[1] xxl3100:scale-[1.6]' />
                  </button>
                  <span className='mt-1 cursor-pointer font-poppins text-[1rem] font-[400] text-white xl2300:text-[1.2rem] xxl3100:mt-4 xxl3100:text-[2rem]'>
                    TopUp
                  </span>
                </div>
                <div className='ml-3 flex h-auto w-auto flex-col items-center justify-start'>
                  <button
                    onClick={withdrawFromWallet}
                    className={`${styles.button} flex h-[70px] w-[70px] items-center justify-center rounded-[15px] sm:h-[100px] sm:w-[100px] sm:rounded-[25px] lg:h-[80px] lg:w-[80px]  lg:rounded-[25px] xl1900:h-[100px] xl1900:w-[100px] xl2300:h-[120px] xl2300:w-[120px] xl2300:rounded-[40px] xxl3100:h-[10vh] xxl3100:w-[10vh] xxl3100:rounded-[50px]`}
                  >
                    <ArrowDown className='scale-[0.65] xl1900:scale-[1] xxl3100:scale-[1.6]' />
                  </button>
                  <span className='mt-1 cursor-pointer font-poppins text-[1rem] font-[400] text-white xl2300:text-[1.2rem] xxl3100:mt-4 xxl3100:text-[2rem]'>
                    Withdraw
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex h-[20%] w-[80%] flex-col items-center justify-center'>
            <span className=' my-2 cursor-pointer font-poppins text-[1rem] font-[400] text-white xl2300:text-[1.2rem] xxl3100:mt-4 xxl3100:text-[2rem]'>
              Please connect wallet use this feature
            </span>
            <button
              onClick={openConnectModal}
              className={`${styles.connect} h-[35px] w-[40%] max-w-[130px] rounded-[50px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2rem]`}
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wallet;
