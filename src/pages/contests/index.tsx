import { useRouter } from 'next/router';
import React from 'react';

import styles from '@/styles/Extras.module.css';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Contests = () => {
  const router = useRouter();
  return (
    <Layout>
      <Seo title='Contests' />
      <div
        className={`${styles.scroll} ${styles.grid} grid h-auto min-h-full w-full grid-cols-1 place-items-center gap-x-[20px] gap-y-10 overflow-y-scroll bg-transparent px-3 pb-5 pt-8 sm:grid-cols-2 sm:px-[3vw] sm:pt-14 lg:place-content-start lg:rounded-[50px] lg:p-8  lg:px-5 lg1100:grid-cols-3 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xl1900:gap-y-[80px] xl1900:pt-14 xxl3100:gap-y-[200px] xxl3100:px-[100px] xxl3100:pt-[150px]`}
      >
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
