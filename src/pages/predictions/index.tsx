import { ethers } from 'ethers';
import dynamic from 'next/dynamic';
import React from 'react';
import { useAccount } from 'wagmi';

import styles from '@/styles/Extras.module.css';

import ContestCards from '@/components/card/ContestCards';
import Layout from '@/components/layout/Layout';
import Loader from '@/components/Loader';
import Seo from '@/components/Seo';

import {
  getContract,
  getPredictionsOfUser,
  UserPredictions,
} from '@/utils/helper-functions';

// const getContests = async () => {
//   const { contract } = await getContract();
//   const contests = await contract.getContests();
//   return await contests;
// };

const Predictions = () => {
  const { address } = useAccount();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [predictions, setPredictions] = React.useState<UserPredictions[]>([]);
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);

  let timer: NodeJS.Timer;

  const setTimer = async () => {
    const { contract } = await getContract();
    const lastTime = await contract?.getLatestTimeStamp();
    const interval = await contract?.getInterval();
    const lastTimeStamp = parseInt(lastTime.add(interval).toString());
    let countDownDate: number;
    countDownDate = new Date((lastTimeStamp + 180) * 1000).getTime();
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
    if (address) {
      try {
        getPredictionsOfUser(address!, setLoading).then((predictions) =>
          setPredictions(predictions)
        );
      } catch (error) {
        console.clear();
      }
    }
    setTimer();
    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <Seo title='Predictions' />
      <div className='h-full w-full bg-transparent p-0 lg:p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div
          data-loading={loading}
          className={`${styles.scroll} grid h-full w-full place-items-center gap-x-[10px] gap-y-10 overflow-y-scroll rounded-[18px] bg-pageBg pt-8 shadow-predictions  sm:grid-cols-2 sm:px-[3vw] sm:pt-14 lg:place-content-start lg:rounded-[40px] lg:bg-bgPredictions lg:px-5 lg:pt-8 lg:pb-5 lg1100:grid-cols-3 lg1300:pt-10 xl1400:pt-12 xl1500:pt-10 xl1900:gap-y-[70px] xl1900:pt-14 xxl3100:gap-y-[130px] xxl3100:rounded-[70px] xxl3100:px-[100px] xxl3100:pt-[130px] `}
        >
          {predictions
            .sort((a, b) => {
              if (a.predictedAt > b.predictedAt) {
                return 1;
              } else if (a.predictedAt < b.predictedAt) {
                return -1;
              } else {
                return 0;
              }
            })
            .map(
              (
                {
                  amount,
                  contestId,
                  difference,
                  predictedAt,
                  predictedValue,
                  resultTime,
                  maxPlayers,
                  numOfPlayers,
                  user,
                  from,
                  to,
                },
                i
              ) => (
                <ContestCards
                  key={i}
                  predicted={true}
                  completed={
                    new Date(resultTime * 1000).getTime() < new Date().getTime()
                      ? true
                      : false
                  }
                  from={from}
                  to={to}
                  entranceFee={ethers.utils.formatEther(amount)}
                  numberOfPredictions={
                    new Date(resultTime * 1000).getTime() < new Date().getTime()
                      ? maxPlayers
                      : numOfPlayers
                  }
                  maxPlayers={maxPlayers}
                  timeLeft={
                    new Date(resultTime * 1000).getTime() < new Date().getTime()
                      ? ''
                      : getTimeLeft()
                  }
                />
              )
            )}
          {loading && <Loader />}
        </div>
      </div>
    </Layout>
  );
};

// export default Predictions;
export default dynamic(() => Promise.resolve(Predictions), { ssr: false });
