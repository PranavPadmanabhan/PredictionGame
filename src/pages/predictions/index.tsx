import dynamic from 'next/dynamic';
import React from 'react';

import styles from '@/styles/Extras.module.css';

import Layout from '@/components/layout/Layout';
import Loader from '@/components/Loader';
import Seo from '@/components/Seo';

import { getContests } from '@/utils/helper-functions';

// const getContests = async () => {
//   const { contract } = await getContract();
//   const contests = await contract.getContests();
//   return await contests;
// };

const Predictions = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      getContests(setLoading).then((contests) => console.log(contests));
      console.log(loading);
    } catch (error) {
      console.clear();
    }
  }, []);

  return (
    <Layout>
      <Seo title='Predictions' />
      <div className='h-full w-full bg-transparent p-0 lg:p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div
          data-loading={loading}
          className={`${styles.scroll} grid h-full w-full place-items-center gap-x-[10px] gap-y-10 overflow-y-scroll rounded-[18px] bg-pageBg pt-8 shadow-predictions  sm:grid-cols-2 sm:px-[3vw] sm:pt-14 lg:place-content-start lg:rounded-[40px] lg:bg-bgPredictions lg:px-5 lg:pt-8 lg:pb-5 lg1100:grid-cols-3 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xl1900:gap-y-[70px] xl1900:pt-14 xxl3100:gap-y-[130px] xxl3100:rounded-[70px] xxl3100:px-[100px] xxl3100:pt-[130px] `}
        >
          {/* {titles.map(({ from, to }, i) => (
            <ContestCards
              key={i}
              predicted={true}
              completed={i % 2 === 0 ? true : false}
              from={from}
              to={to}
            />
          ))} */}
          {loading && <Loader />}
        </div>
      </div>
    </Layout>
  );
};

// export default Predictions;
export default dynamic(() => Promise.resolve(Predictions), { ssr: false });
