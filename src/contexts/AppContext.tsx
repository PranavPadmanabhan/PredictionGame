import React, { useContext, useState } from 'react';

type Context = {
  isTxModalOpen: boolean;
  setIsTxModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type ContextProvider = {
  children: React.ReactNode;
};

const AppContext = React.createContext<Context>({} as Context);

const AppContextProvider = ({ children }: ContextProvider) => {
  const [isTxModalOpen, setIsTxModalOpen] = useState<boolean>(false);
  const value = { isTxModalOpen, setIsTxModalOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext: () => Context = () => useContext(AppContext);
