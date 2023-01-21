import React from 'react';

import styles from '@/styles/Extras.module.css';

import Layout from '@/components/layout/Layout';
import PredictedValue from '@/components/PredictedValue';

const Contest = () => {
  const predictions = [
    {
      value: 100000,
      time: '10:30PM',
    },
    {
      value: 100000,
      time: '10:30PM',
    },
    {
      value: 121384.23473738,
      time: '10:30PM',
    },
    {
      value: 100000,
      time: '10:30PM',
    },
    {
      value: 1637.3727736,
      time: '10:30PM',
    },
  ];

  return (
    <Layout>
      <div className='flex h-full w-full items-center justify-between p-3 lg:p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div className='h-full w-full snap-y snap-mandatory overflow-hidden overflow-y-scroll rounded-[18px] bg-bgPredictions shadow-predictions scrollbar-hide lg:rounded-[40px]'>
          <section className='box-border flex min-h-full w-full snap-center flex-col items-center justify-between rounded-[40px] bg-transparent p-5  lg:flex-row xxl3100:rounded-[70px]'>
            <div className='flex h-1/2 w-full flex-col items-center justify-center lg:h-full lg:w-[40%] '>
              <div className='mb-4 flex h-[20%] max-h-[60px] min-h-[45px] w-[80%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 lg1300:h-[25%] xl1400:h-[25%] xl1500:h-[30%] xxl3100:max-h-[150px] xxl3100:w-[90%] xxl3100:rounded-[60px]'>
                <div
                  className={`${styles.cardBox} -ml-[1px] box-border flex h-[45px] w-[52%] items-center  justify-start overflow-hidden bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px] xxl3100:pl-[25px]`}
                >
                  <div
                    className={`mr-2
                 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-cardTitleBox1 lg:h-[45px] lg:w-[45px] xl1400:mr-2 xl1400:h-[55px]  xl1400:w-[55px] xl1500:mr-2 xl1500:h-[55px] xl1500:w-[55px] xxl3100:mr-4 xxl3100:h-[100px] xxl3100:w-[100px] `}
                  ></div>
                  <h1
                    className={`font-poppins
                 text-[1.2rem] font-[700] text-white xl1500:text-[1.3rem] xxl3100:text-[2.7rem] `}
                  >
                    ETH
                  </h1>
                </div>
                <div className='flex h-full w-[48%] items-center justify-end bg-transparent pr-[7px] xl1500:pr-[11px] xxl3100:pr-[24px]'>
                  <h1
                    className={`font-poppins
                text-[1.2rem] font-[700] text-white xl1500:text-[1.3rem] xxl3100:text-[2.7rem] `}
                  >
                    USD
                  </h1>
                  <div className='ml-2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-cardTitleBox2 lg:h-[45px] lg:w-[45px] xl1400:h-[55px] xl1400:w-[55px] xl1500:ml-2  xl1500:h-[55px] xl1500:w-[55px] xxl3100:ml-4  xxl3100:h-[100px] xxl3100:w-[100px]'></div>
                </div>
              </div>
              <input
                placeholder='Add your prediction'
                type='number'
                className={`${styles.input} my-3 box-border h-[50px] w-full rounded-[20px] pl-5 text-center`}
              />
              <div className='box-border flex min-h-[40px] w-full flex-col items-center justify-start pt-1'>
                <span className='font-poppins text-[1rem] font-[300] text-white '>
                  Latest Price of ETH :{' '}
                  <span className='font-mono text-[1.3rem] font-[900] text-blue-500 '>
                    1514
                  </span>{' '}
                  USD
                </span>
                <span className='font-poppins text-[1.1rem] font-[500] text-white '>
                  6 Hours Left
                </span>
                <span className='font-poppins text-[0.9rem] font-[300] text-white '>
                  Prediction Fee : 0.02 ETH
                </span>
                <div className='my-2 flex min-h-[20px] w-[75%] items-center justify-start self-center rounded-[30px] bg-white p-[1px] lg:max-h-[18px] lg:min-h-[12px] lg:p-[2px] xxl3100:max-h-[50px] xxl3100:min-h-[30px] xxl3100:p-[5px] '>
                  <div className='h-[20px] w-[40%] rounded-[28px]  bg-gradient-to-r from-sliderColor1 to-sliderColor2 lg:max-h-[18px] lg:min-h-[12px] lg:w-[70%] xxl3100:max-h-[50px] xxl3100:min-h-[30px]'></div>
                </div>
              </div>
              <button className='mt-4 h-[10%] max-h-[50px] min-h-[35px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[1rem] font-[500] text-white shadow-card xxl3100:mt-7 xxl3100:min-h-[80px] xxl3100:min-w-[100px] xxl3100:max-w-[400px] xxl3100:rounded-[30px] xxl3100:text-[2.2rem] '>
                Predict
              </button>
            </div>
            <div
              className={` ${styles.predictionBox} flex h-1/2 w-full flex-col items-center justify-start overflow-y-scroll rounded-[30px] p-3 shadow-predictionBox drop-shadow-predictionBox  scrollbar-hide lg:h-full lg:w-[50%]`}
            >
              <h1 className='sticky top-0 h-auto w-full text-center font-poppins text-[1.4rem] font-[900] text-white'>
                Last Predictions
              </h1>
              <div className='sticky top-0 mb-2 flex h-[35px] w-[95%] items-center justify-between border-b-[1px] border-b-line px-5'>
                <span className='font-poppins text-[1rem] font-[400] text-white '>
                  Predictions
                </span>
                <span className='mr-2 font-poppins text-[1rem] font-[400] text-white'>
                  time
                </span>
              </div>
              {predictions.map((item, i) => (
                <PredictedValue
                  key={i}
                  index={i + 1}
                  value={item.value.toString()}
                  time={item.time.toString()}
                />
              ))}
            </div>
          </section>
          <section className='mt-0 flex h-full w-full snap-center flex-col items-center justify-between bg-transparent p-5 lg:-mt-10 lg:flex-row'>
            <div
              className={` ${styles.predictionBox} flex h-1/2 w-full flex-col items-center justify-start overflow-y-scroll rounded-[30px] p-3 shadow-predictionBox drop-shadow-predictionBox  scrollbar-hide lg:h-full lg:w-[50%]`}
            >
              <h1 className='sticky top-0 h-auto w-full text-center font-poppins text-[1.4rem] font-[900] text-white'>
                Last Winners
              </h1>
              <div className='sticky top-0 mb-2 flex h-[35px] w-[95%] items-center justify-between border-b-[1px] border-b-line px-5'>
                <span className='font-poppins text-[1rem] font-[400] text-white '>
                  addresses
                </span>
                <span className='mr-2 font-poppins text-[1rem] font-[400] text-white'>
                  prize
                </span>
              </div>
              {predictions.map((item, i) => (
                <PredictedValue
                  key={i}
                  index={i + 1}
                  value={item.value.toString()}
                  time={item.time.toString()}
                />
              ))}
            </div>
            <div className='h--1/2 w-full bg-transparent lg:h-full lg:w-[50%]'></div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contest;
