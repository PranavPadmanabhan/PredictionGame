import Lottie from 'lottie-react';
import React from 'react';

import styles from '@/styles/Extras.module.css';

import { CloseIcon } from '@/components/icons/Icons';

import { useAppContext } from '@/contexts/AppContext';

import TxError from '../../public/lottie/TxError.json';
import TxLoading from '../../public/lottie/TxProcessing.json';
import TxSucces from '../../public/lottie/TxSuccess.json';

type modal = {
  status:
    | 'Processing'
    | 'Success'
    | 'Failed'
    | 'Initiated'
    | 'Started'
    | 'Cancelled';
  hash: string;
};

const Modal = ({ status, hash }: modal) => {
  const showStatus = () => {
    switch (status) {
      case 'Failed':
        return 'w-[55%]';
      case 'Processing':
        return 'w-[50%]';
      case 'Initiated':
        return 'w-[5%]';
      case 'Success':
        return 'w-full';
      case 'Started':
        return 'w-[50%]';
      case 'Cancelled':
        return 'w-[5%]';
      default:
        return 'w-[2%]';
    }
  };

  const { setIsTxModalOpen, setTxStatus } = useAppContext();

  return (
    <div className='absolute flex h-full w-full items-center justify-center bg-transparent'>
      <div className='relative flex h-[40%] w-[80vw] flex-col items-center justify-start rounded-[20px] bg-bgModal pt-[2vh] backdrop-blur-[50px] md:w-[70%] lg:max-h-[380px] lg:w-[60%] lg:max-w-[600px] lg:rounded-[30px] lg:pt-[2%] xxl3100:max-h-[1000px] xxl3100:max-w-[1500px] xxl3100:rounded-[70px] xxl3100:pt-0'>
        {(status === 'Success' ||
          status === 'Failed' ||
          status === 'Cancelled') && (
          <CloseIcon
            onClick={() => {
              setIsTxModalOpen(false);
              setTxStatus('Initiated');
            }}
            className='absolute top-2 right-2 scale-95 cursor-pointer duration-700 lg:h-[30px] lg:w-[30px] xxl3100:top-[30px] xxl3100:right-[30px] xxl3100:h-[70px] xxl3100:w-[70px] '
          />
        )}
        {(status === 'Processing' ||
          status === 'Started' ||
          status === 'Initiated') && (
          <Lottie
            animationData={TxLoading}
            className='my-4 h-auto w-[85%] duration-700  lg:my-2 lg:h-[35%] lg:w-[70%]'
          />
        )}
        {status == 'Success' && (
          <Lottie
            animationData={TxSucces}
            className='my-2  max-h-[65px] min-h-[40px] min-w-[40px] max-w-[65px] duration-700 lg:my-3 lg:h-[30%] lg:max-h-[70px] lg:w-[30%] lg:max-w-[70px] xxl3100:my-[80px] xxl3100:min-h-[150px] xxl3100:min-w-[150px]'
            loop={false}
          />
        )}
        {(status == 'Failed' || status === 'Cancelled') && (
          <Lottie
            animationData={TxError}
            className='my-2 max-h-[65px] min-h-[40px] min-w-[40px] max-w-[65px] duration-700 lg:my-3 lg:h-[30%] lg:max-h-[70px] lg:w-[30%] lg:max-w-[70px] xxl3100:my-[80px]  xxl3100:min-h-[150px] xxl3100:min-w-[150px]'
            loop={false}
          />
        )}
        <h1 className='whitespace-nowrap text-center font-poppins text-[1.2rem] font-bold text-white lg:text-[2rem] xxl3100:mt-[20px] xxl3100:mb-[40px]  xxl3100:text-[5rem] '>
          Transaction {status}
        </h1>
        <div className='flex w-full flex-col  items-center justify-start pt-6 lg:my-2 lg:h-[20%] lg:w-full lg:pt-2'>
          <div
            className={`${styles.progressContainer} mb-2 box-border flex w-[80%] items-center justify-start  bg-white lg:mb-0 lg:w-[60%]  xxl3100:h-[30px] `}
          >
            <div
              className={`${styles.progress} min-h-full  ${
                status === 'Failed' || status === 'Cancelled'
                  ? 'bg-red-600'
                  : 'bg-gradient-to-r from-sliderColor1 to-sliderColor2'
              }  lg:min-h-full xxl3100:h-full ${showStatus()} duration-700`}
            ></div>
          </div>
          <div className='mb-4 flex h-[20px] w-full items-center justify-between md:w-[90%] lg:mb-0 lg:w-[73%] xxl3100:my-5 xxl3100:h-auto xxl3100:w-[79%] xxl3100:whitespace-nowrap '>
            <span
              className={`max-w-[25%] text-center text-[0.6rem] font-[500] leading-3 xxl3100:text-[2rem] ${
                status === 'Cancelled' ? 'text-red-600' : 'text-white'
              } lg:max-w-full`}
            >
              {status === 'Cancelled'
                ? `Transaction ${status}`
                : status === 'Initiated'
                ? 'Waiting For Response'
                : 'Transaction Initiated'}
            </span>
            <span
              className={`max-w-[25%] text-center text-[0.6rem] font-[500] leading-3 xxl3100:text-[2rem] ${
                status === 'Failed' ? 'text-red-600' : 'text-white'
              }`}
            >
              Transaction {status === 'Failed' ? status : 'Started'}
            </span>
            <span className='max-w-[30%] text-center text-[0.6rem] font-[500] leading-3 text-white xxl3100:text-[2rem] '>
              Transaction Completed
            </span>
          </div>
        </div>
        {(status === 'Failed' ||
          status === 'Processing' ||
          status === 'Started' ||
          status === 'Success') && (
          <a
            target='_blank'
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            className='mb-2 font-poppins text-[0.8rem] font-normal text-white underline lg:mb-5 lg:text-[0.85rem] xxl3100:text-[2rem] '
            rel='noreferrer'
          >
            View Transaction
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
