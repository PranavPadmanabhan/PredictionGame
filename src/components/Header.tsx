import React from 'react';

const Header = () => {
  return (
    <div className='absolute top-0 box-border  flex h-[12vh] max-h-[150px] w-full items-center justify-end self-start bg-transparent pr-[5%]'>
      <button className='h-[40px] w-[30%] max-w-[150px] rounded-[50px] bg-button text-white'>
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
