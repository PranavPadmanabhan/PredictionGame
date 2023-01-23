import { GameWireless } from '@carbon/icons-react';
import { MessageQuestion } from 'iconsax-react';
import { MdAccountBalanceWallet, MdBatchPrediction } from 'react-icons/md';

import {
  ContestIcon,
  FAQIcon,
  PredictionsIcon,
  WalletIcon,
} from '@/components/icons/Icons';

type link = {
  id: number;
  label: string;
  icon: any;
  url: string;
};

export const sideBarLinks: link[] = [
  {
    id: 1,
    label: 'Contests',
    icon: ContestIcon,
    url: '/contests',
  },
  {
    id: 2,
    label: 'Your Predictions',
    icon: PredictionsIcon,
    url: '/predictions',
  },
  {
    id: 3,
    label: 'Wallet',
    icon: WalletIcon,
    url: '/wallet',
  },
  {
    id: 4,
    label: 'FAQ',
    icon: FAQIcon,
    url: '/faq',
  },
];

export const bottomNavLinks: link[] = [
  {
    id: 1,
    label: 'Contests',
    icon: GameWireless,
    url: '/contests',
  },
  {
    id: 2,
    label: 'Your Predictions',
    icon: MdBatchPrediction,
    url: '/predictions',
  },
  {
    id: 3,
    label: 'Wallet',
    icon: MdAccountBalanceWallet,
    url: '/wallet',
  },
  {
    id: 4,
    label: 'FAQ',
    icon: MessageQuestion,
    url: '/faq',
  },
];
