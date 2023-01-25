import { ethers } from 'ethers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '@/styles/Extras.module.css';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { titlesGoerli } from '@/constant/constants';
import { getContract } from '@/utils/helper-functions';

type Contest = {
  id: number | string;
  from: {
    title: string;
    icon: any;
  };
  to: {
    title: string;
    icon: any;
  };
  entranceFee: number;
  numOfPlayers: number;
  maxPlayers: number;
};

type props = {
  contests: [
    {
      id: string | number;
      fee: number;
      numOfPlayers: number;
      maxPlayers: number;
    }
  ];
};

const Contests = ({ contests }: props) => {
  const router = useRouter();
  const contestsData: Contest[] = contests.map((item) => {
    const data = titlesGoerli.filter(
      (val) => val.id.toString() === item.id.toString()
    );
    return {
      id: item.id,
      from: data[0].from,
      to: data[0].to,
      entranceFee: item.fee,
      maxPlayers: item.maxPlayers,
      numOfPlayers: item.numOfPlayers,
    };
  });

  return (
    <Layout>
      <Seo title='Contests' />
      <div
        className={`${styles.scroll} ${styles.grid} grid h-auto min-h-full w-full grid-cols-1 place-items-center gap-x-[20px] gap-y-10 overflow-y-scroll bg-transparent px-3 pb-5 pt-8 sm:grid-cols-2 sm:px-[3vw] sm:pt-14 lg:place-content-start lg:rounded-[50px] lg:p-8  lg:px-5 lg1100:grid-cols-3 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xl1900:gap-y-[80px] xl1900:pt-14 xl2300:gap-y-[120px] xl2300:pt-[100px] xxl3100:gap-y-[200px] xxl3100:px-[100px] xxl3100:pt-[150px]`}
      >
        {contestsData.map(
          ({ id, from, to, entranceFee, numOfPlayers, maxPlayers }) => (
            <ContestCards
              key={id}
              predicted={false}
              from={from}
              entranceFee={entranceFee}
              numberOfPredictions={numOfPlayers}
              maxPlayers={maxPlayers}
              to={to}
              onClick={() => router.push(`/contests/${from.title}-${to.title}`)}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default Contests;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { contract } = await getContract();
  const contests = await contract?.getContests();
  let contestsData: any[] = [];
  let predictionDetails: number[] = [];
  for (let i = 0; i < contests.length; i++) {
    const predictionData = await contract?.getPredictions(
      contests[i].id.toString()
    );
    predictionDetails = [...predictionDetails, predictionData.length];
  }
  const maxPlayersData = await contract?.getNumOfMaxPlayers();
  const maxPlayers = parseInt(maxPlayersData.toString());

  contestsData = contests.map((item: any, index: number) => {
    return {
      id: parseInt(item.id.toString()),
      fee: parseFloat(
        ethers.utils.formatEther(item.entranceFee.toString()).toString()
      ),
      numOfPlayers: predictionDetails[index],
      maxPlayers: maxPlayers,
    };
  });
  // predictionDetails.map((item) => console.log(typeof item));
  return {
    props: {
      contests: contestsData,
    },
  };
};
