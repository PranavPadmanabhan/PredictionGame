/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Aave,
  Bitcoin,
  Chainlink,
  Dai,
  EthereumClassic,
  Litecoin,
  UsdCoin,
} from 'iconsax-react';

import { abi, contractAddress } from '@/constant/constants.json';

type Title = {
  id: number | string;
  from: {
    title: string;
    icon: any;
  };
  to: {
    title: string;
    icon: any;
  };
};

export const rewardsForFirst = [
  0.0008, 0.0005, 0.0002, 0.00005333333, 0.00004, 0.000032, 0.00001066666,
  0.0000064, 0.00000333333,
];

export const rewardsForSecond = [
  0.0015, 0.0012, 0.0009, 0.0008, 0.0007, 0.0005, 0.0004, 0.0002, 0.0001,
];
export const rewardsForThird = [
  0.008, 0.005, 0.003, 0.0008, 0.0007, 0.0005, 0.0004, 0.0002, 0.0001,
];

export const distribution = [
  '1',
  '2',
  '3',
  '4-6',
  '7-10',
  '11-15',
  '16-25',
  '26-50',
  '51-100',
];

export const titles: Title[] = [
  {
    id: 1,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 2,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 3,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 4,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 5,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 6,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 7,
    from: {
      title: 'AAVE',
      icon: Aave,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 8,
    from: {
      title: 'AAVE',
      icon: Aave,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 9,
    from: {
      title: 'AAVE',
      icon: Aave,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 10,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 11,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 12,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 13,
    from: {
      title: 'BNB',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 14,
    from: {
      title: 'BNB',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 15,
    from: {
      title: 'BNB',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 16,
    from: {
      title: 'LTC',
      icon: Litecoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 17,
    from: {
      title: 'LTC',
      icon: Litecoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 18,
    from: {
      title: 'LTC',
      icon: Litecoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
];

export const titlesGoerli: Title[] = [
  {
    id: 1,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 2,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 3,
    from: {
      title: 'ETH',
      icon: EthereumClassic,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 4,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 5,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 6,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 7,
    from: {
      title: 'DAI',
      icon: Dai,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 8,
    from: {
      title: 'DAI',
      icon: Dai,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 9,
    from: {
      title: 'DAI',
      icon: Dai,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 10,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 11,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 12,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'USD',
      icon: UsdCoin,
    },
  },
  {
    id: 13,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
  {
    id: 14,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
  {
    id: 15,
    from: {
      title: 'BTC',
      icon: Bitcoin,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
  {
    id: 16,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
  {
    id: 17,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
  {
    id: 18,
    from: {
      title: 'LINK',
      icon: Chainlink,
    },
    to: {
      title: 'ETH',
      icon: EthereumClassic,
    },
  },
];

export { abi, contractAddress };
