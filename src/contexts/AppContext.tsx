import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { Contest } from '@/constant/Types';
import { getContests, getLatestTimeStamp } from '@/utils/helper-functions';

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
  const [lastTime, setLastTime] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);

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
  };
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
    try {
      getContests(setLoading).then((contests) => setContests(contests));
      getLatestTimeStamp().then((time) => setLastTime(time));
    } catch (error) {
      console.clear();
    }
    setIsTxModalOpen(false);
    return () => {
      setTxStatus('Initiated');
      setLastTime(0)
      setContests([]);
    };
  }, [router.pathname]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext: () => Context = () => useContext(AppContext);
