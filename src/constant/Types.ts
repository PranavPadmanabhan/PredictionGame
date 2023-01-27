export type Contest = {
  id: number | string;
  from: {
    title: string;
    icon: any;
  };
  to: {
    title: string;
    icon: any;
  };
  entranceFee: number;
  numOfPlayers: number;
  maxPlayers: number;
};
