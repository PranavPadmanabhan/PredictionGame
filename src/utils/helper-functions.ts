import { Contract, ethers } from 'ethers';

import { abi, contractAddress } from '@/constant/constants';
import { RPC_URL } from '@/constant/env';

export const getContract = async () => {
  // console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const provider = new ethers.providers.WebSocketProvider(RPC_URL!);
  const contract: Contract = new ethers.Contract(
    contractAddress,
    abi,
    provider
  );
  return { contract, provider };
};
