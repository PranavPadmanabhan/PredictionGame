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
