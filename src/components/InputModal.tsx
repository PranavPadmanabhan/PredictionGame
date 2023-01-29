import React from 'react';

import styles from '@/styles/Extras.module.css';

import { CloseIcon } from '@/components/icons/Icons';

type props = {
  value: string;
  error: string;
  onCloseButtonClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  from?: string;
  to?: string;
  price?: string;
  title: string;
  onSubmit: () => void;
};

const InputModal = ({
  value,
  error,
  onCloseButtonClick,
  onChange,
  from,
  price,
  to,
  title,
  onSubmit,
}: props) => {
  return (
    <div className='fixed top-0 z-[1000] flex h-screen w-screen items-center justify-center bg-transparent lg:hidden '>
      <div className='relative -mt-[15%] flex h-[55%] min-h-[300px] w-[85%] flex-col items-center justify-center gap-y-2 rounded-3xl bg-[rgba(250,250,250,0.15)] backdrop-blur-[50px] sm:mt-0'>
        <CloseIcon
          onClick={onCloseButtonClick}
          className='absolute top-2 right-2 flex scale-95 cursor-pointer  duration-700 lg:h-[30px] lg:w-[30px] xxl3100:top-[30px] xxl3100:right-[30px] xxl3100:h-[70px] xxl3100:w-[70px] '
        />
        <h1 className=' font-poppins text-[2rem] font-extrabold text-white drop-shadow-textModal'>
          {title.toUpperCase()}
        </h1>
        <input
          type='text'
          data-error={error !== '' ? true : false}
          onChange={onChange}
          value={value}
          placeholder={
            title.toLowerCase() === 'predict'
              ? 'Enter your Prediction'
              : 'Enter amount'
          }
          className={`${styles.input} mt-6 box-border h-[55px] w-[85%] max-w-[320px] rounded-[10px] pl-5 text-center text-black placeholder:text-[1rem] focus:rounded-[10px] focus:outline-none  sm:min-h-[55px] sm:min-w-[450px] sm:max-w-[350px]`}
        />
        <span className='flex h-[20px] w-full items-center justify-center text-center font-poppins text-[1rem] font-[300] text-[rgb(255,0,0)]'>
          {error}
        </span>
        {from && to && price && (
          <div className='mb-2 flex h-auto w-full flex-col items-center justify-start gap-y-1 '>
            <span className='font-poppins text-[1rem] font-[300] text-white '>
              Latest Price of {from?.toUpperCase()}
            </span>
            <div className='flex gap-x-1 font-poppins text-[1rem] font-[300] text-white '>
              <span className='font-[900] text-blue-500 '>{price}</span>
              <span className=''>{to?.toUpperCase()}</span>
            </div>
          </div>
        )}
        <button
          onClick={() => {
            onCloseButtonClick();
            onSubmit();
          }}
          className={`${styles.connect} h-[40px] w-[60%] max-w-[180px] rounded-[10px] bg-button font-poppins text-[0.8rem] text-white  md:h-[50px] md:max-w-[220px] md:text-[1.1rem]`}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default InputModal;
