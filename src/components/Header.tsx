import React from 'react';

type header = {
  className?: string;
};

const Header = ({ className }: header) => {
  return (
    <div
      className={`${className} absolute top-0 box-border  flex h-[12vh] max-h-[150px] w-full items-center justify-end self-start bg-transparent pr-[5%]  `}
    >
      <button className='h-[40px] w-[30%] max-w-[150px] rounded-[50px] bg-button font-poppins text-[1rem] text-white xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] '>
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
