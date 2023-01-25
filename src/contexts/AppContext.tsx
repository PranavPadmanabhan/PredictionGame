import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

type Context = {
  isTxModalOpen: boolean;
  setIsTxModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rank: number;
  setRank: React.Dispatch<React.SetStateAction<number>>;
  width: number;
};

type ContextProvider = {
  children: React.ReactNode;
};

const AppContext = React.createContext<Context>({} as Context);

const AppContextProvider = ({ children }: ContextProvider) => {
  const [isTxModalOpen, setIsTxModalOpen] = useState<boolean>(false);
  const [width, setWidth] = React.useState<number>(0);
  const [rank, setRank] = useState<number>(0);
  const value = { isTxModalOpen, setIsTxModalOpen, rank, setRank, width };
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
    setIsTxModalOpen(false);
  }, [router.pathname]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext: () => Context = () => useContext(AppContext);
