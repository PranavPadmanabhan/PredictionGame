import React from 'react';

import styles from '@/styles/Extras.module.css';

type header = {
  className?: string;
};

const Header = ({ className }: header) => {
  return (
    <div
      className={`${className} ${styles.header} absolute top-0 box-border  flex h-[10vh] max-h-[90px] w-full items-center justify-end self-start bg-transparent pr-[5%] lg:h-[12vh] lg:max-h-[150px] xxl3100:max-h-[200px]`}
    >
      <button
        className={`${styles.connect} h-[35px] w-[40%] max-w-[130px] rounded-[50px] bg-button font-poppins text-[0.9rem] text-white md:h-[50px] md:max-w-[220px] md:text-[1.1rem] lg:h-[40px] lg:w-[30%] lg:max-w-[150px] lg:text-[1rem] xl1400:h-[45px] xl1400:max-w-[180px] xl1400:text-[1.1rem] xxl3100:h-[100px] xxl3100:max-w-[400px] xxl3100:text-[2rem]`}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
