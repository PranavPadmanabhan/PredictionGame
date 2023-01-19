import React from 'react';

import styles from './Card.module.css';

const ContestCards = () => {
  return (
    <div className='flex h-full max-h-[345px] min-h-[220px] w-[50%]  min-w-[210px] max-w-[320px] flex-col items-center justify-start rounded-[30px] bg-gradient-to-br from-cardGradient1 to-cardGradient2 p-2 pt-4 shadow-card drop-shadow-card  xl1500:min-h-[310px] xl1500:w-[100%] xl1500:max-w-[280px] xl1500:rounded-[40px]'>
      <div className='flex h-[20%] max-h-[80px] min-h-[50px] w-[93%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 shadow-cardtTitleBox lg1300:h-[23%] xl1400:h-[25%] xl1500:h-[30%]'>
        <div
          className={`${styles.cardBox} box-border flex h-full w-[52%] items-center  justify-start bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px]`}
        >
          <div className='mr-1 h-[35px] w-[35px] rounded-full bg-cardTitleBox1 xl1400:mr-2 xl1400:h-[55px] xl1400:w-[55px] xl1500:mr-2 xl1500:h-[55px] xl1500:w-[55px] '></div>
          <h1 className='font-poppins text-[1rem] font-[700] text-white xl1500:text-[1.3rem]'>
            ETH
          </h1>
        </div>
        <div className='flex h-full w-[48%] items-center justify-end bg-transparent pr-[7px] xl1500:pr-[12px]'>
          <h1 className='font-poppins text-[1rem] font-[700] text-white xl1500:text-[1.3rem]'>
            USD
          </h1>
          <div className='ml-1 h-[35px] w-[35px] rounded-full bg-cardTitleBox2  xl1400:h-[55px] xl1400:w-[55px] xl1500:ml-2 xl1500:h-[55px] xl1500:w-[55px]'></div>
        </div>
      </div>
    </div>
  );
};

export default ContestCards;
