/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import React from 'react';

import styles from '@/styles/Extras.module.css';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Loader from '@/components/Loader';
import Seo from '@/components/Seo';

import { titlesGoerli } from '@/constant/constants';
import { useAppContext } from '@/contexts/AppContext';
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

// type props = {
//   contests: [
//     {
//       id: string | number;
//       fee: number;
//       numOfPlayers: number;
//       maxPlayers: number;
//     }
//   ];
//   lastTime: number;
// };

const Contests = () => {
  const router = useRouter();
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const { contests, lastTime, loading } = useAppContext();

  let timer: NodeJS.Timer;

  const setTimer = async () => {
    let countDownDate: number;
    countDownDate = new Date(lastTime * 1000).getTime();
    timer = setInterval(async function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      setHours(hour);
      setMinutes(mins);
      setSeconds(second);
      // console.log(`${hour} ${mins} ${second}`);
      if (distance < 0) {
        const { contract } = await getContract();
        const lastTime = await contract?.getLatestTimeStamp();
        const interval = await contract?.getInterval();
        const lastTimeStamp = parseInt(lastTime.add(interval).toString());
        countDownDate = new Date(lastTimeStamp * 1000).getTime();
      }
    }, 1000);
  };

  React.useEffect(() => {
    setTimer();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const contestsData: Contest[] = contests.map((item) => {
    const data = titlesGoerli.filter(
      (val) => val.id.toString() === item.id.toString()
    );
    return {
      id: item.id,
      from: data[0]!.from,
      to: data[0]!.to,
      entranceFee: item.entranceFee,
      maxPlayers: item.maxPlayers,
      numOfPlayers: item.numOfPlayers,
    };
  });

  const getTimeLeft = () => {
    if (hours > 1) {
      return `${hours} hours`;
    } else if (hours == 1) {
      return `1 hour`;
    } else if (hours < 1) {
      return `${minutes} mins`;
    } else if (minutes < 1) {
      return `${seconds} s`;
    } else {
      return '0 hour left';
    }
  };

  return (
    <Layout>
      <Seo title='Contests' />
      <div
        data-loading={loading}
        className={`${styles.scroll} ${styles.grid} grid h-auto min-h-full w-full grid-cols-1 place-items-center gap-x-[20px] gap-y-10 overflow-y-scroll bg-transparent px-3 pb-5 pt-8 sm:grid-cols-2 sm:px-[3vw] sm:pt-14 lg:place-content-start lg:rounded-[50px] lg:p-8  lg:px-5 lg1100:grid-cols-3 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xl1900:gap-y-[80px] xl1900:pt-14 xl2300:gap-y-[120px] xl2300:pt-[100px] xxl3100:gap-y-[200px] xxl3100:px-[100px] xxl3100:pt-[150px]`}
      >
        {loading ? (
          <Loader />
        ) : (
          contestsData.map(
            ({ id, from, to, entranceFee, numOfPlayers, maxPlayers }) => (
              <ContestCards
                key={id}
                predicted={false}
                from={from}
                entranceFee={entranceFee}
                numberOfPredictions={numOfPlayers}
                maxPlayers={maxPlayers}
                timeLeft={getTimeLeft()}
                to={to}
                onClick={() => {
                  router.push(
                    `/contests/${from.title.toLowerCase()}-${to.title.toLowerCase()}&${id}`
                  );
                }}
              />
            )
          )
        )}
      </div>
    </Layout>
  );
};

export default Contests;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { contract } = await getContract();
//   const contests = await contract?.getContests();
//   let contestsData: any[] = [];
//   let predictionDetails: number[] = [];
//   for (let i = 0; i < contests.length; i++) {
//     const predictionData = await contract?.getPredictions(
//       contests[i].id.toString()
//     );
//     predictionDetails = [...predictionDetails, predictionData.length];
//   }
//   const maxPlayersData = await contract?.getNumOfMaxPlayers();
//   const maxPlayers = parseInt(maxPlayersData.toString());
//   const lastTime = await contract?.getLatestTimeStamp();
//   const interval = await contract?.getInterval();
//   const lastTimeStamp = parseInt(lastTime.add(interval).toString());

//   contestsData = contests.map((item: any, index: number) => {
//     return {
//       id: parseInt(item.id.toString()),
//       fee: parseFloat(
//         ethers.utils.formatEther(item.entranceFee.toString()).toString()
//       ),
//       numOfPlayers: predictionDetails[index],
//       maxPlayers: maxPlayers,
//     };
//   });
//   // predictionDetails.map((item) => console.log(typeof item));
//   return {
//     props: {
//       contests: contestsData,
//       lastTime: lastTimeStamp,
//     },
//   };
// };
