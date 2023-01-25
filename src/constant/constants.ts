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
