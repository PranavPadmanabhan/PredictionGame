/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
import { People, Timer1 } from 'iconsax-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useAccount } from 'wagmi';

import styles from '@/styles/Extras.module.css';

import Layout from '@/components/layout/Layout';
import PredictedValue from '@/components/PredictedValue';

import { titlesGoerli } from '@/constant/constants';
import { useAppContext } from '@/contexts/AppContext';
import {
  getContests,
  getContract,
  getEntranceFee,
  getLatestPrice,
  getLatestTimeStamp,
  getMaxPlayers,
  getPredictions,
  getWinners,
} from '@/utils/helper-functions';

type Prediction = {
  contestId: number;
  predictedValue: number;
  predictedAt: number;
  user: string;
  difference: number;
  amount: number;
  resultTime: number;
};

type props = {
  id: number | string;
  entranceFee: number;
  latestPrice: number;
  lastTime: number;
  predictions: Prediction[];
  maxPlayers: number;
  winners: string[];
};

const Contest = ({
  entranceFee,
  id,
  latestPrice,
  lastTime,
  predictions,
  maxPlayers,
  winners,
}: props) => {
  const { width } = useAppContext();
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const { address } = useAccount();
  const [predictionList, setPredictionList] =
    React.useState<Prediction[]>(predictions);
  const [winnersList, setWinnersList] = React.useState<string[]>(winners);

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

  React.useEffect(() => {
    setTimer();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const disabled = width <= 900 ? true : false;
  const data = titlesGoerli.filter((item) => item.id!.toString() === `${id!}`);
  const {
    from: { title: From, icon: IconFrom },
    to: { title: To, icon: IconTo },
  } = data[0]!;

  return (
    <Layout>
      <div className='flex h-full w-full items-center justify-between p-0 lg:p-10 xl1400:p-14 xxl3100:p-[130px] '>
        <div
          className={`${styles.scroll} h-full w-full snap-y snap-mandatory overflow-hidden overflow-y-scroll rounded-[18px] bg-pageBg shadow-predictions lg:rounded-[40px] lg:bg-bgPredictions`}
        >
          <section className='box-border flex h-full w-full snap-none flex-col items-center justify-evenly rounded-[40px] bg-transparent p-5 lg:snap-center lg:flex-row xxl3100:h-1/2  xxl3100:justify-evenly xxl3100:rounded-[70px]'>
            <div className='flex h-[60%] w-full flex-col items-center justify-center lg:h-full lg:w-[40%] xxl3100:w-[30%] '>
              <div className='mb-4 flex h-[20%] max-h-[80px] min-h-[60px] w-[80%] items-center justify-between overflow-hidden rounded-[50px] bg-cardTitleBox1 shadow-cardtTitleBox lg:max-h-[70px] lg:min-h-[65px] lg1300:h-[25%] xl1400:h-[25%] xl1500:h-[30%] xxl3100:max-h-[150px] xxl3100:w-[90%] xxl3100:rounded-[60px]'>
                <div
                  className={`${styles.cardBox} -ml-[1px] box-border flex h-[45px] w-[52%] items-center  justify-start overflow-hidden bg-cardTitleBox2 pl-[7px] xl1500:pl-[12px] xxl3100:pl-[25px]`}
                >
                  <div
                    className={`mr-2
                 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-cardTitleBox1 lg:h-[50px] lg:w-[50px] xl1400:mr-2 xl1400:h-[55px]  xl1400:w-[55px] xl1500:mr-2 xl1500:h-[55px] xl1500:w-[55px] xxl3100:mr-4 xxl3100:h-[100px] xxl3100:w-[100px] `}
                  >
                    <IconFrom
                      size='26'
                      color='white'
                      variant='Bold'
                      className='xl1600:scale-[1.2] xxl3100:scale-[2.5] '
                    />
                  </div>
                  <h1
                    className={`font-poppins
                 text-[1.1rem] font-[700] text-white xl1500:text-[1.3rem] xxl3100:text-[2.7rem] `}
                  >
                    {From!}
                  </h1>
                </div>
                <div className='flex h-full w-[48%] items-center justify-end bg-transparent pr-[7px] xl1500:pr-[11px] xxl3100:pr-[24px]'>
                  <h1
                    className={`font-poppins
                text-[1.1rem] font-[700] text-white xl1500:text-[1.3rem] xxl3100:text-[2.7rem] `}
                  >
                    {To!}
                  </h1>
                  <div className='ml-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-cardTitleBox2 lg:h-[50px] lg:w-[50px]  xl1400:h-[55px] xl1400:w-[55px] xl1500:ml-2  xl1500:h-[55px] xl1500:w-[55px] xxl3100:ml-4  xxl3100:h-[100px] xxl3100:w-[100px]'>
                    <IconTo
                      size='26'
                      color='white'
                      variant='Bold'
                      className='xl1600:scale-[1.25] xxl3100:scale-[2.5] '
                    />
                  </div>
                </div>
              </div>
              <input
                placeholder='Add your prediction'
                type='number'
                disabled={disabled}
                className={`${styles.input} my-3 box-border min-h-[50px] w-full rounded-[15px] pl-5 text-center lg:rounded-[20px]`}
              />
              <div className='box-border flex min-h-[40px] w-full flex-col items-center justify-start pt-1'>
                <span className='font-poppins text-[0.9rem] font-[300] text-white '>
                  Latest Price of {From} :{' '}
                  <span className='font-mono text-[1rem] font-[900] text-blue-500 '>
                    {latestPrice!}
                  </span>{' '}
                  {To}
                </span>
                <span className='my-2 font-poppins text-[0.9rem] font-[300] text-white '>
                  Prediction Fee : {entranceFee} ETH
                </span>
                <div className=' flex min-h-[25px] w-[80%] items-center justify-between  xxl3100:min-h-[80px]'>
                  <div className='flex h-full w-auto items-center justify-start gap-x-1 pl-1 xxl3100:gap-x-[80px] '>
                    <Timer1
                      size='20'
                      variant='Bold'
                      color='white'
                      className='flex xl1900:hidden'
                    />
                    <Timer1
                      size='35'
                      variant='Bold'
                      color='white'
                      className='hidden xl1900:flex xxl3100:hidden '
                    />

                    <Timer1
                      size='45'
                      variant='Bold'
                      color='white'
                      className='hidden xxl3100:flex '
                    />

                    <span className='font-poppins text-[0.8rem] font-[300] text-white sm:text-[0.85rem] xl1400:ml-2 xl1400:text-[0.93rem] xl1900:text-[0.96rem] xl2300:text-[1.4rem] xxl3100:ml-5 xxl3100:text-[0.8vw] '>
                      {getTimeLeft!()} left
                    </span>
                  </div>
                  <div className='flex h-full w-auto items-center justify-end gap-x-1 pr-1 '>
                    <People
                      size='20'
                      variant='Bold'
                      color='white'
                      className='flex xl1900:hidden'
                    />

                    <People
                      size='35'
                      variant='Bold'
                      color='white'
                      className='hidden xl1900:flex xxl3100:mr-5 xxl3100:hidden '
                    />
                    <People
                      size='35'
                      variant='Bold'
                      color='white'
                      className='hidden xxl3100:mr-5 xxl3100:flex '
                    />
                    <span className='font-poppins text-[0.8rem] font-[300] text-white sm:text-[0.9rem] xl1400:ml-3 xl1400:text-[0.93rem] xl1900:text-[0.96rem] xl2300:text-[1.4rem] xxl3100:mr-5 xxl3100:text-[0.8vw]'>
                      {predictions.length}/{maxPlayers}
                    </span>
                  </div>
                </div>

                <div className='my-2 box-border flex min-h-[20px] w-[75%] items-center justify-start self-center rounded-[30px] bg-white p-[1px] lg:max-h-[18px] lg:min-h-[12px] lg:p-[1px] xxl3100:max-h-[50px] xxl3100:min-h-[30px] xxl3100:p-[5px] '>
                  <div
                    style={{ width: predictions.length / maxPlayers }}
                    className='h-full rounded-[28px]  bg-gradient-to-r from-sliderColor1 to-sliderColor2  lg:h-[15px] lg:max-h-[18px] xxl3100:max-h-[50px] xxl3100:min-h-[30px]'
                  ></div>
                </div>
              </div>
              <button className='mt-4 h-[10%] max-h-[50px] min-h-[40px] w-[50%] min-w-[70px] max-w-[150px] rounded-[15px] bg-cardTitleBox1 font-poppins text-[1rem] font-[500] text-white shadow-predictButton xxl3100:mt-7 xxl3100:min-h-[80px] xxl3100:min-w-[100px] xxl3100:max-w-[400px] xxl3100:rounded-[30px] xxl3100:text-[2.2rem] '>
                Predict
              </button>
            </div>
            <div
              className={` ${styles.predictionBox} mt-5 flex h-1/2 w-full flex-col items-center justify-start overflow-hidden rounded-[18px] p-3 shadow-predictionBox  drop-shadow-predictionBox scrollbar-hide lg:mt-0 lg:h-full lg:w-[50%] lg:rounded-[30px] xxl3100:w-[30%]`}
            >
              <h1 className=' h-auto w-full text-center font-poppins text-[1.4rem] font-[900] text-white'>
                Last Predictions
              </h1>
              <div className=' mb-2 flex h-[35px] w-[95%] items-center justify-between border-b-[1px] border-b-line px-5'>
                <span className='font-poppins text-[1rem] font-[400] text-white '>
                  Predictions
                </span>
                <span className='mr-2 font-poppins text-[1rem] font-[400] text-white'>
                  time
                </span>
              </div>
              <div className='flex  max-h-full w-full flex-col items-center justify-start overflow-y-scroll scrollbar-hide '>
                {predictionList.map((item, i) => (
                  <PredictedValue
                    key={i}
                    needSeparator
                    isActive={
                      address?.toLowerCase() === item.user.toLowerCase()
                    }
                    indexShown={false}
                    value={item.predictedValue!.toString()}
                    time={item.contestId!.toString()}
                  />
                ))}
                {predictionList.length === 0 && (
                  <span className='mt-[25%] font-poppins text-[1rem] text-white'>
                    No data
                  </span>
                )}
              </div>
            </div>
          </section>
          <section className='mt-0 flex h-full w-full snap-none flex-col items-center justify-evenly bg-transparent p-5 lg:snap-center lg:flex-row xxl3100:h-1/2  xxl3100:justify-evenly'>
            <div
              className={` ${styles.predictionBox} mt-0 flex h-1/2 w-full flex-col items-center justify-start overflow-hidden rounded-[18px] p-3 shadow-predictionBox drop-shadow-predictionBox scrollbar-hide lg:mt-0  lg:h-full lg:w-[50%] lg:rounded-[30px] xxl3100:w-[30%]`}
            >
              <h1 className=' h-auto w-full text-center font-poppins text-[1.4rem] font-[900] text-white'>
                Last Winners
              </h1>
              <div className=' mb-2 flex h-[35px] w-[95%] items-center justify-between border-b-[1px] border-b-line px-5'>
                <span className='font-poppins text-[1rem] font-[400] text-white '>
                  addresses
                </span>
                <span className='mr-2 font-poppins text-[1rem] font-[400] text-white'>
                  prize
                </span>
              </div>
              <div
                className={`flex  max-h-full w-full flex-col items-center ${
                  winnersList.length !== 0 ? 'justify-start' : 'justify-center'
                } overflow-y-scroll scrollbar-hide `}
              >
                {winnersList.map((item, i) => (
                  <PredictedValue
                    isActive={item.toLowerCase() === address?.toLowerCase()}
                    key={i}
                    indexShown={true}
                    needSeparator
                    index={i + 1}
                    value={item!}
                    time={`${i}`}
                  />
                ))}
                {winners.length === 0 && (
                  <span className='mt-[25%] font-poppins text-[1rem] text-white'>
                    No data
                  </span>
                )}
              </div>
            </div>
            <div
              className={` ${styles.predictionBox} mt-5 flex h-1/2 w-full flex-col items-center justify-start overflow-hidden rounded-[18px] p-3 shadow-predictionBox drop-shadow-predictionBox  scrollbar-hide lg:mt-0 lg:h-full lg:w-[45%] lg:rounded-[30px] xxl3100:w-[30%]`}
            >
              <h1 className=' h-auto w-full text-center font-poppins text-[1.4rem] font-[900] text-white'>
                Prizes
              </h1>
              <div className='flex  max-h-full w-full flex-col items-center justify-start overflow-y-scroll scrollbar-hide '>
                {predictions.map((item, i) => (
                  <PredictedValue
                    indexShown={true}
                    key={i}
                    isActive={false}
                    index={i + 1}
                    value={item.predictedValue!.toString()}
                    time={item.contestId!.toString()}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contest;

type Props = {
  id: number;
  entranceFee: number;
  latestPrice: number;
  lastTime: number;
  predictions: Prediction[];
  maxPlayers: number;
  decimals: number;
  winners: string[];
};

interface Params extends ParsedUrlQuery {
  contestName: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contests = await getContests();
  const paths = contests.map((item) => {
    return {
      params: {
        contestName: `${item.from.title.toLowerCase()}-${item.to.title.toLowerCase()}&${
          item.id
        }`,
      },
    };
  });
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { contestName } = context.params!;
  const index = contestName.indexOf('&');
  const id = parseInt(contestName.slice(index + 1, contestName.length));
  const predictions = await getPredictions(id);
  const { latestPrice, decimals } = await getLatestPrice(id);
  const entranceFee = await getEntranceFee(id);
  const lastTime = await getLatestTimeStamp();
  const maxPlayers = await getMaxPlayers();
  const winners = await getWinners(id);
  return {
    props: {
      id,
      entranceFee: parseFloat(entranceFee!.toString()),
      latestPrice,
      lastTime,
      predictions,
      maxPlayers,
      decimals,
      winners,
    },
  };
};
