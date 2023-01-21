import Lottie from 'lottie-react';
import React from 'react';

import { CloseIcon } from '@/components/icons/Icons';

import { useAppContext } from '@/contexts/AppContext';

import TxError from '../../public/lottie/TxError.json';
import TxLoading from '../../public/lottie/TxProcessing.json';
import TxSucces from '../../public/lottie/TxSuccess.json';

type modal = {
  status: 'Processing' | 'Success' | 'Failed' | 'Requested' | 'Started';
};

const Modal = ({ status }: modal) => {
  const showStatus = () => {
    switch (status) {
      case 'Failed':
        return 'w-[55%]';
      case 'Processing':
        return 'w-[25%]';
      case 'Requested':
        return 'w-[5%]';
      case 'Success':
        return 'w-full';
      case 'Started':
        return 'w-[50%]';
      default:
        return 'w-[2%]';
    }
  };

  const { setIsTxModalOpen } = useAppContext();

  return (
    <div className='absolute flex h-full w-full items-center justify-center bg-transparent'>
      <div className='relative flex h-[40%] w-[80%] flex-col items-center justify-start rounded-[30px] bg-bgModal pt-[2vh] backdrop-blur-[50px] lg:max-h-[380px] lg:w-[60%] lg:max-w-[600px] lg:pt-[2%] xxl3100:max-h-[1000px] xxl3100:max-w-[1500px] xxl3100:rounded-[70px]'>
        {(status === 'Success' || status === 'Failed') && (
          <CloseIcon
            onClick={() => setIsTxModalOpen(false)}
            className='absolute top-2 right-2 scale-95 cursor-pointer lg:h-[30px] lg:w-[30px] xxl3100:top-[30px] xxl3100:right-[30px] xxl3100:h-[70px] xxl3100:w-[70px] '
          />
        )}
        {(status === 'Processing' ||
          status === 'Started' ||
          status === 'Requested') && (
          <Lottie
            animationData={TxLoading}
            className='my-4 h-auto w-[85%] lg:my-2  lg:h-[40%] lg:w-[75%]'
          />
        )}
        {status == 'Success' && (
          <Lottie
            animationData={TxSucces}
            className='my-2  max-h-[65px] min-h-[40px] min-w-[40px] max-w-[65px] lg:my-3 lg:h-[30%] lg:max-h-[70px] lg:w-[30%] lg:max-w-[70px]'
            loop={false}
          />
        )}
        {status == 'Failed' && (
          <Lottie
            animationData={TxError}
            className='my-2 max-h-[65px] min-h-[40px] min-w-[40px] max-w-[65px] lg:my-3 lg:h-[30%] lg:max-h-[70px] lg:w-[30%] lg:max-w-[70px]'
            loop={false}
          />
        )}
        <h1 className='whitespace-nowrap text-center font-poppins text-[1.2rem] font-bold text-white lg:text-[2rem]'>
          Transaction {status}
        </h1>
        <div className='flex w-full flex-col  items-center justify-start pt-6 lg:my-2 lg:h-[20%] lg:w-full lg:pt-2'>
          <div className=' mb-2 box-border flex min-h-[12px] w-[80%] items-center justify-start rounded-[30px] bg-white p-[1px] lg:mb-0 lg:max-h-[30px] lg:min-h-[10px] lg:w-[60%] lg:rounded-[50px] lg:p-[1px]'>
            <div
              className={` min-h-[12px] rounded-[49px] border-2  ${
                status === 'Failed'
                  ? 'bg-red-600'
                  : 'bg-gradient-to-r from-sliderColor1 to-sliderColor2'
              }  lg:min-h-[10px] ${showStatus()} duration-700`}
            ></div>
          </div>
          <div className='mb-4 flex h-[20px] w-full items-center justify-between lg:mb-0 lg:w-[73%]'>
            <span className=' max-w-[50%] text-center text-[0.6rem] font-[500] leading-3 text-white lg:max-w-full'>
              Transaction Requested
            </span>
            <span
              className={`text-center text-[0.6rem] font-[500] leading-3 ${
                status === 'Failed' ? 'text-red-600' : 'text-white'
              }`}
            >
              Transaction {status === 'Failed' ? status : 'Started'}
            </span>
            <span className='text-center text-[0.6rem] font-[500] leading-3 text-white'>
              Transaction Completed
            </span>
          </div>
        </div>
        {status !== 'Requested' && (
          <a
            href=''
            className='font-poppins text-[1rem] font-normal text-white underline'
          >
            View Transaction
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
