/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import styles from './Card.module.css';

type cards = {
  completed?: boolean;
  predicted?: boolean;
  onClick?: () => void;
};

const ContestCards = ({ completed, onClick, predicted }: cards) => {
  return (
    <div
      className={`flex h-full cursor-pointer ${
        predicted
          ? 'max-h-[345px] min-h-[200px] w-[50%] min-w-[190px] max-w-[320px] lg1300:min-h-[230px] lg1300:w-[100%] lg1300:max-w-[210px] xl1400:min-h-[230px] xl1400:w-[100%] xl1400:max-w-[230px] xl1500:min-h-[270px] xl1500:w-[100%] xl1500:max-w-[270px] xxl3100:min-h-[600px] xxl3100:w-[100%] xxl3100:max-w-[550px] xxl3100:rounded-[100px]'
          : 'max-h-[345px] min-h-[220px] w-[50%] min-w-[210px] max-w-[320px] lg1300:min-h-[250px] lg1300:w-[100%] lg1300:max-w-[230px] xl1400:min-h-[300px] xl1400:w-[100%] xl1400:max-w-[260px] xl1500:min-h-[310px] xl1500:w-[100%] xl1500:max-w-[280px] xxl3100:min-h-[700px] xxl3100:w-[100%] xxl3100:max-w-[600px] xxl3100:rounded-[100px] '
      }  flex-col items-center justify-between rounded-[30px] bg-gradient-to-br from-cardGradient1 to-cardGradient2 p-2 py-4 shadow-card drop-shadow-card  lg1300:rounded-[40px]  xl1400:rounded-[40px]  xl1500:rounded-[40px] xxl3100:py-[50px]`}
    >
      <div className='flex h-[20%] max-h-[80px] min-h-[55px] w-[93%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 lg1300:h-[25%] xl1400:h-[25%] xl1500:h-[30%] xxl3100:max-h-[150px] xxl3100:w-[90%] xxl3100:rounded-[60px] '>
        <div
          className={`${styles.cardBox} -ml-[1px] box-border flex h-[101%] w-[52%] items-center  justify-start overflow-hidden bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px] xxl3100:pl-[25px]`}
        >
          <div
            className={`mr-1 ${
              predicted
                ? 'h-[35px] w-[35px] xl1400:h-[45px] xl1400:w-[45px] xl1500:h-[55px] xl1500:w-[55px] xxl3100:h-[100px] xxl3100:w-[100px]'
                : 'h-[35px] w-[35px] xl1400:h-[55px] xl1400:w-[55px] xl1500:h-[55px] xl1500:w-[55px] xxl3100:h-[100px] xxl3100:w-[100px]'
            } flex  items-center justify-center rounded-full bg-cardTitleBox1 xl1400:mr-2 xl1500:mr-2 xxl3100:mr-4 `}
          ></div>
          <h1
            className={`font-poppins ${
              predicted
                ? 'text-[0.9rem] xl1500:text-[1.1rem] xxl3100:text-[2.2rem]'
                : 'text-[1rem] xl1500:text-[1.3rem] xxl3100:text-[2.7rem]'
            } font-[700] text-white `}
          >
            ETH
          </h1>
        </div>
        <div className='flex h-full w-[48%] items-center justify-end bg-transparent pr-[7px] xl1500:pr-[11px] xxl3100:pr-[24px]'>
          <h1
            className={`font-poppins ${
              predicted
                ? 'text-[0.9rem] xl1500:text-[1.1rem] xxl3100:text-[2.2rem]'
                : 'text-[1rem] xl1500:text-[1.3rem] xxl3100:text-[2.7rem]'
            } font-[700] text-white `}
          >
            USD
          </h1>
          <div
            className={`ml-1 ${
              predicted
                ? 'h-[35px] w-[35px] xl1400:h-[45px] xl1400:w-[45px] xl1500:h-[55px] xl1500:w-[55px] xxl3100:h-[100px] xxl3100:w-[100px]'
                : 'h-[35px] w-[35px] xl1400:h-[55px] xl1400:w-[55px] xl1500:h-[55px] xl1500:w-[55px] xxl3100:h-[100px] xxl3100:w-[100px]'
            }  flex items-center  justify-center rounded-full bg-cardTitleBox2  xl1500:ml-2 xxl3100:ml-4`}
          ></div>
        </div>
      </div>
      <div className='mt-3 flex h-[30%] w-full flex-col items-start justify-center pl-4 xxl3100:pl-10'>
        <span
          className={`${
            predicted
              ? 'text-[0.8rem] xxl3100:text-[2.4rem]'
              : 'text-[0.85rem] xxl3100:text-[2.4rem]'
          } font-poppins  font-[500] text-white xxl3100:mt-10`}
        >
          Prediction Fee : 0.02 ETH
        </span>
        <span
          className={`mt-0 font-poppins ${
            predicted
              ? 'text-[0.8rem] xxl3100:text-[2.4rem]'
              : 'text-[0.85rem] xxl3100:text-[2.4rem]'
          } font-[500] text-white xl1400:mt-2 xxl3100:mt-10`}
        >
          6 Hours left
        </span>
      </div>
      <div className='flex h-[35%] w-full flex-col items-center justify-center gap-y-2 '>
        <div className='my-2 flex max-h-[18px] min-h-[12px] w-[85%] items-center justify-start self-center rounded-[30px] bg-white p-[2px] xxl3100:max-h-[50px] xxl3100:min-h-[30px] xxl3100:p-[5px] '>
          <div className='h-full w-[40%] rounded-[28px] bg-gradient-to-r from-sliderColor1 to-sliderColor2'></div>
        </div>
        {!predicted && (
          <button
            onClick={onClick}
            className='h-[10%] min-h-[35px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[0.85rem] font-[500] text-white xxl3100:mt-7 xxl3100:min-h-[80px] xxl3100:min-w-[100px] xxl3100:max-w-[400px] xxl3100:rounded-[30px] xxl3100:text-[2.2rem] '
          >
            Predict
          </button>
        )}
      </div>
    </div>
  );
};

export default ContestCards;
