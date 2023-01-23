import React from 'react';

import styles from '@/styles/Extras.module.css';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Predictions = () => {
  return (
    <Layout>
      <Seo title='Predictions' />
      <div className='h-full w-full bg-transparent p-0 lg:p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div
          className={`${styles.scroll} grid h-full w-full place-items-center gap-x-[10px] gap-y-10 overflow-y-scroll rounded-[18px]  bg-pageBg pt-8 shadow-predictions lg:grid-cols-3 lg:place-content-start lg:rounded-[40px] lg:bg-bgPredictions lg:px-5 lg:pt-2 lg:pb-5 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xxl3100:gap-y-[130px] xxl3100:rounded-[70px] xxl3100:px-[100px] xxl3100:pt-[130px] `}
        >
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
          <ContestCards predicted={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Predictions;
