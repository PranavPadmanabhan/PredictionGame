import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useAccount, useContractEvent } from 'wagmi';

import { abi, contractAddress } from '@/constant/constants';
import { Contest } from '@/constant/Types';
import {
  getBalance,
  getContests,
  getLatestTimeStamp,
} from '@/utils/helper-functions';

type Context = {
  isTxModalOpen: boolean;
  setIsTxModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rank: number;
  setRank: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  txStatus: TxStatus;
  setTxStatus: React.Dispatch<React.SetStateAction<TxStatus>>;
  txHash: any;
  setTxHash: React.Dispatch<React.SetStateAction<any>>;
  contests: Contest[];
  setContests: React.Dispatch<React.SetStateAction<Contest[]>>;
  lastTime: number;
  setLastTime: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  balance: number;
};

type TxStatus =
  | 'Processing'
  | 'Success'
  | 'Failed'
  | 'Initiated'
  | 'Started'
  | 'Cancelled';

type ContextProvider = {
  children: React.ReactNode;
};

const AppContext = React.createContext<Context>({} as Context);

const AppContextProvider = ({ children }: ContextProvider) => {
  const [isTxModalOpen, setIsTxModalOpen] = useState<boolean>(false);
  const [width, setWidth] = React.useState<number>(0);
  const [rank, setRank] = useState<number>(0);
  const [txStatus, setTxStatus] = React.useState<TxStatus>('Initiated');
  const [txHash, setTxHash] = useState<any>('');
  const [contests, setContests] = useState<Contest[]>([]);
  const [lastTime, setLastTime] = React.useState<number>(
    new Date().getTime() + 3600
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const [balance, setBalance] = React.useState<number>(0);
  const { address } = useAccount();

  const value = {
    isTxModalOpen,
    setIsTxModalOpen,
    rank,
    setRank,
    width,
    txStatus,
    setTxStatus,
    txHash,
    setTxHash,
    contests,
    setContests,
    lastTime,
    setLastTime,
    loading,
    setLoading,
    balance,
  };
  const router = useRouter();

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: abi,
    eventName: 'ContestCompleted',
    listener: async () => {
      getContests(setLoading).then((contests) => setContests(contests));
    },
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
    try {
      getContests(setLoading).then((contests) => setContests(contests));
      getLatestTimeStamp(setLoading).then((time) => setLastTime(time));
      if (address) {
        getBalance(address!).then((bal) => setBalance(bal));
      }
    } catch (error) {
      console.clear();
    }
    setIsTxModalOpen(false);
    return () => {
      setTxStatus('Initiated');
      setLastTime(0);
      setContests([]);
    };
  }, [router.pathname]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext: () => Context = () => useContext(AppContext);
