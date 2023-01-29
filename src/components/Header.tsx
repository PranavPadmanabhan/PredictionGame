/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAccountModal } from '@rainbow-me/rainbowkit';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import React from 'react';
import { useAccount, useContractEvent } from 'wagmi';

import styles from '@/styles/Extras.module.css';

import Button from '@/components/buttons/Button';

import { abi, contractAddress } from '@/constant/constants';
import { getBalance } from '@/utils/helper-functions';

type header = {
  className?: string;
  showBalance: boolean;
};

const Header = ({ className, showBalance }: header) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [balance, setBalance] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  // const { data, isSuccess, isFetching, isLoading, isRefetching } =
  //   useContractRead({
  //     address: `0x${contractAddress}`,
  //     abi: abi,
  //     functionName: 'balanceOf',
  //     args: [address],
  //     watch: true,
  //   });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: abi,
    eventName: 'TopUpSuccessfull',
    listener: async (amount, user) => {
      getBalance(address!, setLoading).then((balance) => setBalance(balance));
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: abi,
    eventName: 'NewPrediction',
    listener: async () => {
      getBalance(address!, setLoading).then((balance) => setBalance(balance));
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: abi,
    eventName: 'WithdrawSuccessfull',
    listener: async (amount, user) => {
      getBalance(address!, setLoading).then((balance) => setBalance(balance));
    },
  });

  React.useEffect(() => {
    if (address!) {
      getBalance(address!, setLoading).then((balance) => setBalance(balance));
    }
  }, [address!]);

  return (
    <div
      className={`${className} ${styles.header} absolute top-0 box-border  flex h-[10vh] max-h-[90px] w-full items-center justify-end self-start bg-transparent pr-[5%] lg:h-[12vh] lg:max-h-[150px] xxl3100:max-h-[200px]`}
    >
      {isConnected ? (
        <div className='flex h-full w-[40%] flex-col-reverse items-center justify-end gap-y-1 gap-x-4 pt-1 lg:flex-row lg:pr-4'>
          {showBalance && (
            <Button
              onClick={() => router.push('/wallet')}
              variant='outline'
              isLoading={loading}
              className='flex h-[35px] w-[25%] min-w-[130px] items-center justify-center rounded-[10px] p-[2px] font-poppins text-[0.75rem] font-[300] text-white md:h-[50px] md:min-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[25%] lg:min-w-[180px] lg:text-[1rem] xl1400:h-[45px] xl1400:min-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:min-w-[400px] xxl3100:text-[2rem]'
            >
              Funds : {balance == 0 ? '0.00' : balance} ETH
            </Button>
          )}
          <button
            onClick={openAccountModal}
            className={`${styles.connect} h-[35px] w-[100%] max-w-[130px] rounded-[10px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[40%] lg:max-w-[160px] lg:text-[0.85rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2rem]`}
          >
            {address?.toLowerCase().slice(0, 2)}..
            {address?.toLowerCase().slice(address.length - 10, address.length)}
          </button>
        </div>
      ) : (
        <button
          onClick={openConnectModal}
          className={`${styles.connect} h-[35px] w-[40%] max-w-[130px] rounded-[50px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2rem]`}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
