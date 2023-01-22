import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

type Context = {
  isTxModalOpen: boolean;
  setIsTxModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rank: number;
  setRank: React.Dispatch<React.SetStateAction<number>>;
};

type ContextProvider = {
  children: React.ReactNode;
};

const AppContext = React.createContext<Context>({} as Context);

const AppContextProvider = ({ children }: ContextProvider) => {
  const [isTxModalOpen, setIsTxModalOpen] = useState<boolean>(false);
  const [rank, setRank] = useState<number>(0);
  const value = { isTxModalOpen, setIsTxModalOpen, rank, setRank };
  const router = useRouter();

  useEffect(() => {
    setIsTxModalOpen(false);
  }, [router.pathname]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext: () => Context = () => useContext(AppContext);
