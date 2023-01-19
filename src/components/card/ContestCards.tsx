import React from 'react';

import styles from './Card.module.css';

type cards = {
  completed: boolean;
};

const ContestCards = ({ completed }: cards) => {
  return (
    <div className='flex h-full max-h-[345px] min-h-[220px] w-[50%]  min-w-[210px] max-w-[320px] flex-col items-center justify-between rounded-[30px] bg-gradient-to-br from-cardGradient1 to-cardGradient2 p-2 py-4 shadow-card drop-shadow-card lg1300:min-h-[250px] lg1300:w-[100%] lg1300:max-w-[230px] lg1300:rounded-[40px] xl1400:min-h-[300px] xl1400:w-[100%] xl1400:max-w-[260px] xl1400:rounded-[40px] xl1500:min-h-[310px] xl1500:w-[100%] xl1500:max-w-[280px] xl1500:rounded-[40px]'>
      <div className='flex h-[20%] max-h-[80px] min-h-[55px] w-[93%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 lg1300:h-[25%] xl1400:h-[25%] xl1500:h-[30%]'>
        <div
          className={`${styles.cardBox} -ml-[1px] box-border flex h-[101%] w-[54%] items-center  justify-start overflow-hidden bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px]`}
        >
          <div className='mr-1 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-cardTitleBox1 xl1400:mr-2 xl1400:h-[55px] xl1400:w-[55px] xl1500:mr-2 xl1500:h-[55px] xl1500:w-[55px]'></div>
          <h1 className='font-poppins text-[1rem] font-[700] text-white xl1500:text-[1.3rem]'>
            ETH
          </h1>
        </div>
        <div className='flex h-full w-[48%] items-center justify-end bg-transparent pr-[7px] xl1500:pr-[12px]'>
          <h1 className='font-poppins text-[1rem] font-[700] text-white xl1500:text-[1.3rem]'>
            USD
          </h1>
          <div className='ml-1 flex h-[35px] w-[35px] items-center  justify-center rounded-full bg-cardTitleBox2 xl1400:h-[55px] xl1400:w-[55px] xl1500:ml-2 xl1500:h-[55px] xl1500:w-[55px]'></div>
        </div>
      </div>
      <div className='mt-3 flex h-[30%] w-full flex-col items-start justify-center pl-4'>
        <span className='font-poppins text-[0.85rem] font-[500] text-white'>
          Prediction Fee : 0.02 ETH
        </span>
        <span className='font-poppins text-[0.85rem] font-[500] text-white'>
          6 Hours left
        </span>
      </div>
      <div className='flex h-[35%] w-full flex-col items-center justify-center gap-y-2 '>
        <div className='my-2 max-h-[18px] min-h-[12px] w-[85%] self-center rounded-[30px] bg-white p-[2px] '>
          <div className='h-full w-[40%] rounded-[28px] bg-gradient-to-r from-sliderColor1 to-sliderColor2'></div>
        </div>
        {!completed && (
          <button className='h-[10%] min-h-[35px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[0.85rem] font-[500] text-white '>
            Predict
          </button>
        )}
      </div>
    </div>
  );
};

export default ContestCards;
