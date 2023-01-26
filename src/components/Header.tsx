/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAccountModal } from '@rainbow-me/rainbowkit';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react';
import { useAccount, useContractRead } from 'wagmi';

import styles from '@/styles/Extras.module.css';

import Button from '@/components/buttons/Button';

import { abi, contractAddress } from '@/constant/constants';

type header = {
  className?: string;
  showBalance: boolean;
};

const Header = ({ className, showBalance }: header) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected, address } = useAccount();

  const { data, isSuccess, isFetching, isLoading, isRefetching } =
    useContractRead({
      address: `0x${contractAddress}`,
      abi: abi,
      functionName: 'balanceOf',
      args: [address],
    });

  return (
    <div
      className={`${className} ${styles.header} absolute top-0 box-border  flex h-[10vh] max-h-[90px] w-full items-center justify-end self-start bg-transparent pr-[5%] lg:h-[12vh] lg:max-h-[150px] xxl3100:max-h-[200px]`}
    >
      {isConnected ? (
        <div className='flex h-full w-[40%] items-center justify-end gap-x-4 pr-4'>
          {showBalance && (
            <Button
              variant='outline'
              isLoading={isFetching || isLoading || isRefetching}
              className='flex h-[35px] w-[25%] min-w-[130px] items-center justify-center rounded-[10px] p-[2px] font-poppins text-[0.9rem] font-[300] text-white md:h-[50px] md:min-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[25%] lg:min-w-[180px] lg:text-[1rem] xl1400:h-[45px] xl1400:min-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:min-w-[400px] xxl3100:text-[2rem]'
            >
              {isSuccess &&
                `Funds : ${
                  data?.toString() == '0' ? '0.00' : data?.toString()
                } ETH`}
            </Button>
          )}
          <button
            onClick={openAccountModal}
            className={`${styles.connect} h-[35px] w-[40%] max-w-[130px] rounded-[10px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[40%] lg:max-w-[160px] lg:text-[0.85rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2rem]`}
          >
            {address?.slice(0, 2)}..
            {address?.slice(address.length - 10, address.length)}
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
