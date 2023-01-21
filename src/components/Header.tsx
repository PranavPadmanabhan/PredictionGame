import React from 'react';

type header = {
  className?: string;
};

const Header = ({ className }: header) => {
  return (
    <div
      className={`${className} absolute top-0 box-border  flex h-[10vh] max-h-[90px] w-full items-center justify-end self-start bg-transparent pr-[5%] lg:h-[12vh] lg:max-h-[150px] xxl3800:max-h-[200px]`}
    >
      <button className='h-[35px] w-[40%] max-w-[130px] rounded-[50px] bg-button font-poppins text-[0.9rem] text-white lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3800:h-[100px] xxl3800:max-w-[400px] xxl3800:text-[2rem]'>
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
