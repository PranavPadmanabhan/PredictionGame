import { useRouter } from 'next/router';
import React from 'react';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Contests = () => {
  const router = useRouter();
  return (
    <Layout>
      <Seo title='Contests' />
      <div className='grid h-auto min-h-full w-full grid-cols-3  place-content-start place-items-center gap-x-[20px] gap-y-10 overflow-y-scroll rounded-[50px] bg-transparent p-8 px-5 pt-8 pb-5 scrollbar-hide lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xxl3100:gap-y-[200px] xxl3100:px-[100px] xxl3100:pt-[150px]'>
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
        <ContestCards
          predicted={false}
          onClick={() => router.push(`/contests/eth-usd`)}
        />
      </div>
    </Layout>
  );
};

export default Contests;
