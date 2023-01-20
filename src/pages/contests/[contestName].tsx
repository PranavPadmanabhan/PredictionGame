import React from 'react';

import styles from '@/styles/Extras.module.css';

import Layout from '@/components/layout/Layout';

const Contest = () => {
  return (
    <Layout>
      <div className='flex h-full w-full items-center justify-between p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div className='h-full w-full overflow-hidden overflow-y-scroll rounded-[40px] bg-bgPredictions shadow-predictions scrollbar-hide'>
          <section className='box-border flex h-full w-full items-center justify-between rounded-[40px] bg-transparent p-5  xxl3100:rounded-[70px]'>
            <div className='flex h-full w-[40%] flex-col items-center justify-center '>
              <div className='mb-4 flex h-[20%] max-h-[60px] min-h-[45px] w-[80%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 lg1300:h-[25%] xl1400:h-[25%] xl1500:h-[30%] xxl3100:max-h-[150px] xxl3100:w-[90%] xxl3100:rounded-[60px]'>
                <div
                  className={`${styles.cardBox} -ml-[1px] box-border flex h-[101%] w-[52%] items-center  justify-start overflow-hidden bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px] xxl3100:pl-[25px]`}
                >
                  <div
                    className={`mr-2
                 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-cardTitleBox1 xl1400:mr-2 xl1400:h-[55px]  xl1400:w-[55px] xl1500:mr-2 xl1500:h-[55px] xl1500:w-[55px] xxl3100:mr-4 xxl3100:h-[100px] xxl3100:w-[100px] `}
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
                  <div className='ml-2 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-cardTitleBox2 xl1400:h-[55px] xl1400:w-[55px] xl1500:ml-2  xl1500:h-[55px] xl1500:w-[55px] xxl3100:ml-4  xxl3100:h-[100px] xxl3100:w-[100px]'></div>
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
              </div>
              <button className='mt-4 h-[10%] max-h-[50px] min-h-[35px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[1rem] font-[500] text-white shadow-card xxl3100:mt-7 xxl3100:min-h-[80px] xxl3100:min-w-[100px] xxl3100:max-w-[400px] xxl3100:rounded-[30px] xxl3100:text-[2.2rem] '>
                Predict
              </button>
            </div>
            <div className=' flex h-full w-[55%] flex-col items-center justify-start border-2'></div>
          </section>
          <section className='flex h-full w-full items-center justify-center bg-transparent'></section>
        </div>
      </div>
    </Layout>
  );
};

export default Contest;
