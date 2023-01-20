import React from 'react';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Contests = () => {
  return (
    <Layout>
      <Seo title='Contests' />
      <div className='grid h-auto min-h-full w-full grid-cols-3  place-content-start place-items-center gap-x-[20px] gap-y-10 overflow-y-scroll rounded-[50px] bg-transparent p-8 px-5 pt-8 pb-5 scrollbar-hide lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xxl3800:gap-y-[200px] xxl3800:px-[100px] xxl3800:pt-[150px]'>
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
        <ContestCards completed={false} />
      </div>
    </Layout>
  );
};

export default Contests;
