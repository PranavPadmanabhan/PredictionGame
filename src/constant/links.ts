type link = {
  id: number;
  label: string;
  active: string;
  icon: string;
  url: string;
};

export const sideBarLinks: link[] = [
  {
    id: 1,
    label: 'Contests',
    active: '/svg/Activecontests.svg',
    icon: '/svg/contests.svg',
    url: '/contests',
  },
  {
    id: 2,
    label: 'Your Predictions',
    active: '/svg/ActiveyourPredictions.svg',
    icon: '/svg/yourPredictions.svg',
    url: '/predictions',
  },
  {
    id: 3,
    label: 'Wallet',
    active: '/svg/Activewallet.svg',
    icon: '/svg/wallet.svg',
    url: '/wallet',
  },
  {
    id: 4,
    label: 'FAQ',
    active: '/svg/Activefaq.svg',
    icon: '/svg/faq.svg',
    url: '/faq',
  },
];
