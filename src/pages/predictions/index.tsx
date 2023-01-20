import React from 'react';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Predictions = () => {
  return (
    <Layout>
      <Seo title='Predictions' />
      <div className='h-full w-full bg-transparent p-10 xl1400:p-14 xxl3800:p-[130px] '>
        <div className='grid h-full w-full grid-cols-3 place-content-start place-items-center gap-x-[10px] gap-y-10 overflow-y-scroll rounded-[40px] bg-bgPredictions px-5 pt-2 pb-5 shadow-predictions scrollbar-hide lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xxl3800:gap-y-[130px] xxl3800:rounded-[70px] xxl3800:px-[100px] xxl3800:pt-[130px] '>
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
          <ContestCards completed={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Predictions;
