import React from 'react';

type props = {
  value: string;
  time: string;
  index: number;
  needSeparator?: boolean;
};

const PredictedValue = ({ value, time, index, needSeparator }: props) => {
  return (
    <div className='relative my-1 flex h-[20px] w-[90%] items-center justify-between pl-0 lg:pl-3'>
      <span className='font font-poppins text-[0.7rem] font-[400] text-white lg:text-[0.9rem]'>
        {index}. &nbsp;{value}
      </span>
      {needSeparator && (
        <span className='absolute left-1/2 m-auto font-bold text-white'>-</span>
      )}
      <span className='font font-poppins text-[0.7rem] font-[400] text-white lg:text-[1rem]'>
        {time}
      </span>
    </div>
  );
};

export default PredictedValue;
