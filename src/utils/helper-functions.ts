/* eslint-disable unused-imports/no-unused-vars */
import { BigNumber, Contract, ethers } from 'ethers';
import React from 'react';

import {
  abi,
  contractAddress,
  distribution,
  rewardsForFirst,
  rewardsForSecond,
  rewardsForThird,
  titlesGoerli,
} from '@/constant/constants';
import { RPC_URL } from '@/constant/env';

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

export type Prediction = {
  contestId: number;
  predictedValue: number;
  predictedAt: number;
  user: string;
  difference: number;
  amount: number;
  resultTime: number;
};

export type UserPredictions = {
  contestId: number;
  predictedValue: number;
  predictedAt: number;
  user: string;
  difference: number;
  amount: number;
  resultTime: number;
  numOfPlayers: number;
  maxPlayers: number;
  from: {
    title: string;
    icon: any;
  };
  to: {
    title: string;
    icon: any;
  };
};

export const getContract = async () => {
  // console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL!);
  const contract: Contract = new ethers.Contract(
    `0x${contractAddress}`,
    abi,
    provider
  );
  return { contract, provider };
};

export const getSignedContract = async () => {
  const signer = new ethers.providers.Web3Provider(
    window.ethereum as any
  ).getSigner();
  const contract: Contract = new ethers.Contract(
    `0x${contractAddress}`,
    abi,
    signer
  );
  return { contract, signer };
};

export const getContests = async (
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading?.(true);
  const { contract } = await getContract();
  const contests = await contract?.getContests();

  // let predictionDetails: number[] = [];
  // for (let i = 0; i < contests.length; i++) {
  //   const predictionData = await contract?.getPredictions(
  //     contests[i].id.toString()
  //   );
  //   predictionDetails = [...predictionDetails, predictionData.length];
  // }
  // const maxPlayersData = await contract?.getNumOfMaxPlayers();
  // const maxPlayers = parseInt(maxPlayersData.toString());
  const contestData: Contest[] = contests.map((item: any, index: number) => {
    const data = titlesGoerli.filter(
      (val) => val.id.toString() === item.id.toString()
    );
    return {
      id: data[0].id,
      entranceFee: parseFloat(
        ethers.utils.formatEther(item.entranceFee.toString()).toString()
      ),
      from: data[0].from,
      to: data[0].to,
      numOfPlayers: parseInt(item.numOfPredictions.toString()),
      maxPlayers: parseInt(item.maxPlayers.toString()),
    };
  });
  setLoading?.(false);
  // console.log(contestData);

  return contestData;
};

export const getNumberOfContests = async () => {
  const { contract } = await getContract();
  const contests = await contract?.getNumOfContests();
  const number: number = parseInt(contests.toString());
  return number;
};

export const getPredictions = async (
  contestId: number,
  needAllData = false
) => {
  const { contract } = await getContract();
  const lastPlayers = await contract?.getContestPlayers(contestId);
  const startingNumber: number = parseInt(lastPlayers.toString());
  let predictions: Prediction[] = [];
  const AllPredictionsData: Prediction[] = await contract?.getPredictions(
    contestId
  );

  if (needAllData === false) {
    predictions = AllPredictionsData.filter((item: any, i: number) => {
      if (i >= startingNumber) {
        return item;
      }
    });
  } else {
    predictions = AllPredictionsData.map((item) => ({
      amount: parseFloat(item.amount.toString()),
      contestId: parseInt(item.contestId.toString()),
      difference: parseFloat(item.difference.toString()),
      predictedAt: parseInt(item.predictedAt.toString()),
      predictedValue: parseFloat(item.predictedValue.toString()),
      resultTime: parseInt(item.resultTime.toString()),
      user: item.user.toString(),
    }));
  }

  return predictions;
};

export const getEntranceFee = async (contestId: number) => {
  const { contract } = await getContract();
  const entranceFee: BigNumber = await contract?.getEntranceFee(contestId);
  const fee: number = parseFloat(ethers.utils.formatEther(entranceFee));
  return fee;
};

export const getLatestPrice = async (contestId: number) => {
  const { contract } = await getContract();
  const priceData = await contract?.getLatestPrice(contestId);
  const decimals: number = parseInt(priceData[1].toString());
  const latestPrice: number =
    parseInt(priceData[0].toString()) / 10 ** parseInt(priceData[1].toString());
  return { latestPrice, decimals };
};

export const getLatestTimeStamp = async (
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading?.(true);
  const { contract } = await getContract();
  const lastTime: BigNumber = await contract?.getLatestTimeStamp();
  const interval: BigNumber = await contract?.getInterval();
  const lastTimeStamp: number = parseInt(lastTime.add(interval).toString());
  setLoading?.(false);
  return lastTimeStamp;
};

export const getMaxPlayers = async () => {
  const { contract } = await getContract();
  const maxPlayersData: BigNumber = await contract?.getNumOfMaxPlayers();
  const maxPlayers: number = parseInt(maxPlayersData.toString());
  return maxPlayers;
};

export const getWinners = async (contestId: number) => {
  const { contract } = await getContract();
  const winners: any[] = await contract?.getWinners(contestId);
  const lastPlayers = await contract?.getContestPlayers(contestId);
  const startingNumber: number = parseInt(lastPlayers.toString());
  const winnersData = winners.filter((item: any, i: number) => {
    if (i >= startingNumber) {
      return item;
    }
  });
  const winnersList: string[] = winnersData.map((item) => item.toString());
  return winnersList;
};

export const getBalance = async (
  address: string,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading?.(true);
  const { contract } = await getContract();
  const balance: BigNumber = await contract?.balanceOf(address);
  const bal = parseFloat(ethers.utils.formatEther(balance).toString());
  setLoading?.(false);
  return bal;
};

export const getRewardArray = (entranceFee: number) => {
  switch (entranceFee) {
    case 0.0005:
      return { rewards: rewardsForFirst, distribution };
    case 0.00075:
      return { rewards: rewardsForSecond, distribution };
    case 0.001:
      return { rewards: rewardsForThird, distribution };
    default:
      return { rewards: rewardsForFirst, distribution };
  }
};

export const getPredictionsOfUser = async (
  address: string,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading?.(true);
  let Allpredictions: Prediction[] = [];
  const contests = await getContests();
  for (let i = 0; i < contests.length; i++) {
    const contests = await getPredictions(i + 1, true);
    Allpredictions = [...Allpredictions, ...contests];
  }
  const userPredictions: Prediction[] = Allpredictions.filter(
    (item) =>
      item.user.toString().toLowerCase() === address.toString().toLowerCase()
  );

  const predictions: UserPredictions[] = userPredictions.map((item) => {
    const contestData = contests.filter(
      (contest) => contest.id.toString() === item.contestId.toString()
    );
    return {
      amount: item.amount,
      contestId: item.contestId,
      difference: item.difference,
      predictedAt: item.predictedAt,
      predictedValue: item.predictedValue,
      resultTime: item.resultTime,
      user: item.user,
      numOfPlayers: contestData[0]!.numOfPlayers,
      maxPlayers: contestData[0]!.maxPlayers,
      from: contestData[0]!.from,
      to: contestData[0]!.to,
    };
  });
  setLoading?.(false);
  return predictions;
};
