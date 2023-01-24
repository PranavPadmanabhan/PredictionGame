/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { People, Timer1 } from 'iconsax-react';
import React from 'react';

import styles from '@/styles/Extras.module.css';

type cards = {
  completed?: boolean;
  predicted?: boolean;
  onClick?: () => void;
};

const ContestCards = ({ completed, onClick, predicted }: cards) => {
  // max-h-[345px] min-h-[250px] w-[50%] min-w-[240px] max-w-[320px] lg1300:min-h-[250px] lg1300:w-[100%] lg1300:max-w-[230px] xl1400:min-h-[300px] xl1400:w-[100%] xl1400:max-w-[260px] xl1500:min-h-[310px] xl1500:w-[100%] xl1500:max-w-[280px] xxl3100:min-h-[700px] xxl3100:w-[100%] xxl3100:max-w-[600px] xxl3100:rounded-[100px]

  return (
    <div
      className={`flex h-full cursor-pointer ${
        predicted
          ? 'm-3 h-auto max-h-[55vh] min-h-[250px] w-[95%] max-w-[279px] rounded-[50px] p-3 pt-7 sm:max-h-[320px] sm:max-w-[90%] lg:max-h-[32vh] lg:min-h-[230px] xl1400:min-h-[250px] xl1900:max-h-[330px] xl1900:min-h-[300px] xl1900:max-w-[350px] xl1900:rounded-[70px] xl1900:p-5 xl1900:pt-10 xl2300:max-h-[420px] xl2300:min-h-[370px] xl2300:max-w-[450px] xl2300:rounded-[100px] xl2300:p-8 xl2300:pt-14 xxl3100:max-h-[600px] xxl3100:min-h-[500px] xxl3100:max-w-[620px] xxl3100:rounded-[100px]  '
          : 'm-3 h-auto max-h-[55vh] min-h-[270px] w-[95%] max-w-[279px] rounded-[50px] p-3 pt-7 sm:max-h-[320px] sm:max-w-[90%] sm:rounded-[60px] lg:max-h-[35vh] lg:min-h-[270px] xl1900:max-h-[330px] xl1900:max-w-[350px] xl1900:rounded-[70px] xl1900:p-5 xl1900:pt-10 xl2300:max-h-[450px] xl2300:min-h-[350px] xl2300:max-w-[480px] xl2300:rounded-[90px] xl2300:p-8 xl2300:pt-14 xxl3100:max-h-[600px] xxl3100:min-h-[500px] xxl3100:max-w-[680px] xxl3100:rounded-[100px] '
      }  flex-col items-center justify-start bg-gradient-to-br from-cardGradient1 to-cardGradient2 shadow-card drop-shadow-card `}
    >
      <div
        className={`flex h-[25%] max-h-[75px] min-h-[65px] w-[93%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 sm:max-h-[90px] sm:w-[85%] lg:max-h-[65px] lg1100:w-[95%] xl1400:w-[91%] ${
          predicted
            ? 'lg:min-h-[55px] lg1300:min-h-[58px] xl1600:min-h-[72px] xl1900:min-h-[78px] xl2300:min-h-[100px] xl2300:rounded-[100px] xxl3100:min-h-[155px]'
            : 'lg1400:min-h-[80px] lg:min-h-[60px] lg1300:min-h-[68px] xl1600:min-h-[72px] xl1900:min-h-[85px] xl2300:min-h-[120px] xl2300:rounded-[100px] xxl3100:min-h-[155px]'
        }`}
      >
        <div
          className={`${styles.cardBox} lg1400:min-h-[80px] -ml-[1px] box-border flex h-[101%] max-h-[80px] min-h-[66px] w-[53%] items-center  justify-between gap-x-1 overflow-hidden bg-cardTitleBox2 pl-[7px] pr-[10%] sm:pr-[7%] lg:pr-[5%] lg1300:min-h-[69px] lg1300:pr-[10%] xl1400:pr-[7%] xl1500:pl-[12px] xl1600:min-h-[73px] xl1900:min-h-[86px] xl2300:min-h-[121px] xl2300:pr-[7%] xxl3100:min-h-[156px] xxl3100:pl-[17px]`}
        >
          <div
            className={`mr-1 ${
              predicted
                ? 'h-[50px] w-[50px] lg:h-[43px] lg:w-[43px] xl1400:h-[45px] xl1400:w-[45px] xl1500:h-[55px] xl1500:w-[55px] xl1900:h-[58px] xl1900:w-[58px] xl2300:h-[75px] xl2300:w-[75px] xxl3100:h-[120px] xxl3100:w-[120px]'
                : 'h-[50px] w-[50px] lg:h-[45px] lg:w-[45px] xl1400:h-[55px] xl1400:w-[55px] xl1500:h-[55px] xl1500:w-[55px] xl1900:h-[58px] xl1900:w-[58px] xl2300:h-[75px] xl2300:w-[75px] xxl3100:h-[120px] xxl3100:w-[120px]'
            } flex  items-center justify-center rounded-full bg-cardTitleBox1 xl1400:mr-2 xl1500:mr-2 xxl3100:mr-4 `}
          ></div>
          <h1
            className={`font-poppins ${
              predicted
                ? 'text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl1500:text-[1.1rem] xl2300:text-[1.7rem] xxl3100:text-[2.2rem]'
                : 'text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl1500:text-[1.3rem] xl2300:text-[2rem] xxl3100:text-[2.7rem]'
            } font-[700] text-white `}
          >
            LINK
          </h1>
        </div>
        <div className='flex h-full max-h-[80px] min-h-[65px] w-[48%] items-center justify-between bg-transparent pr-[7px] pl-[5%] lg:pl-[3%] lg1300:pl-[6%] xl1400:pl-[5%] xl1500:pr-[11px] xl2300:pl-[4%] xxl3100:pr-[17px]'>
          <h1
            className={`font-poppins ${
              predicted
                ? 'text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl1500:text-[1.1rem] xl2300:text-[1.7rem] xxl3100:text-[2.2rem]'
                : 'text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl1500:text-[1.3rem] xl2300:text-[2rem] xxl3100:text-[2.7rem]'
            } font-[700] text-white `}
          >
            USD
          </h1>
          <div
            className={`ml-1 ${
              predicted
                ? 'h-[50px] w-[50px] lg:h-[43px] lg:w-[43px] xl1400:h-[45px] xl1400:w-[45px] xl1500:h-[55px] xl1500:w-[55px] xl1900:h-[58px] xl1900:w-[58px] xl2300:h-[75px] xl2300:w-[75px] xxl3100:h-[120px] xxl3100:w-[120px]'
                : 'h-[50px] w-[50px] lg:h-[45px] lg:w-[45px] xl1400:h-[55px] xl1400:w-[55px] xl1500:h-[55px] xl1500:w-[55px] xl1900:h-[58px] xl1900:w-[58px] xl2300:h-[75px] xl2300:w-[75px] xxl3100:h-[120px] xxl3100:w-[120px]'
            }  flex items-center  justify-center rounded-full bg-cardTitleBox2  xl1500:ml-2 xxl3100:ml-4`}
          ></div>
        </div>
      </div>
      <div className=' my-4 flex h-[10%] w-full flex-col items-start justify-start pl-4 sm:my-5 lg:my-3 xl1400:my-4 xl1900:my-5 xl2300:my-7 xxl3100:pl-10'>
        <span
          className={`${
            predicted
              ? 'text-[0.8rem] sm:text-[0.93rem] lg:text-[1rem] xl1400:text-[1.1rem] xl1900:text-[1.2rem] xl2300:text-[1.5rem] xxl3100:text-[2.4rem]'
              : 'text-[0.85rem] lg:text-[1rem] xl1400:text-[1.1rem] xl1900:text-[1.2rem] xl2300:text-[1.5rem] xxl3100:text-[2.4rem]'
          } font-poppins  font-[500] text-white xxl3100:mt-10`}
        >
          Prediction Fee : 0.02 ETH
        </span>
      </div>
      <div className='flex h-auto min-h-[7vh] w-full flex-col items-center justify-start'>
        <div className='flex min-h-[25px] w-[90%] items-center justify-between xxl3100:min-h-[80px]  '>
          <div className='flex h-full w-auto items-center justify-start gap-x-1 pl-1 xxl3100:gap-x-[80px] '>
            <Timer1
              size='20'
              variant='Bold'
              color='white'
              className='flex xl1900:hidden'
            />
            <Timer1
              size='40'
              variant='Bold'
              color='white'
              className='hidden xl1900:flex '
            />

            <span className='font-poppins text-[0.8rem] font-[300] text-white sm:text-[0.9rem] xl1400:ml-2 xl1400:text-[0.93rem] xl1900:text-[0.96rem] xl2300:text-[1.4rem] xxl3100:ml-5 xxl3100:text-[0.8vw] '>
              6 Hours left
            </span>
          </div>
          <div className='flex h-full w-auto items-center justify-end gap-x-1 pr-1 '>
            <People
              size='20'
              variant='Bold'
              color='white'
              className='flex xl1900:hidden'
            />

            <People
              size='38'
              variant='Bold'
              color='white'
              className='hidden xl1900:flex xxl3100:mr-5 '
            />
            <span className='font-poppins text-[0.8rem] font-[300] text-white sm:text-[0.9rem] xl1400:ml-3 xl1400:text-[0.93rem] xl1900:text-[0.96rem] xl2300:text-[1.4rem] xxl3100:mr-5 xxl3100:text-[0.8vw]'>
              10/100
            </span>
          </div>
        </div>
        <div className='my-2 flex h-[12px]  w-[85%] items-center justify-start self-center rounded-[30px] bg-white p-[1px] sm:my-3 sm:h-[15px] lg:my-1 lg:min-h-[15px] xl1400:min-h-[18px] xl1600:min-h-[18px] xl1900:my-3 xl1900:min-h-[17px] xl2300:my-6 xl2300:min-h-[24px] xxl3100:h-[50px] xxl3100:min-h-[30px] xxl3100:p-[5px] '>
          <div className='h-full w-[40%] rounded-[28px] bg-gradient-to-r from-sliderColor1 to-sliderColor2'></div>
        </div>
        {!predicted && (
          <button
            onClick={onClick}
            className='my-2 h-[10%] min-h-[40px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[0.85rem] font-[500] text-white shadow-predictButton sm:my-3 lg:my-2 lg1300:my-2 xl1400:my-3 xl1900:my-3 xl1900:min-h-[48px] xxl3100:mt-7 xxl3100:min-h-[80px] xxl3100:min-w-[100px] xxl3100:max-w-[400px] xxl3100:rounded-[30px] xxl3100:text-[2.2rem] '
          >
            Predict
          </button>
        )}
      </div>
    </div>
  );
};

export default ContestCards;
