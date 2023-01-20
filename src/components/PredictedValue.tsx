import React from 'react';

type props = {
  value: string;
  time: string;
  index: number;
};

const PredictedValue = ({ value, time, index }: props) => {
  return (
    <div className='relative my-1 flex h-[20px] w-[90%] items-center justify-between pl-3'>
      <span className='font font-poppins text-[0.9rem] font-[400] text-white'>
        {index}. &nbsp;{value}
      </span>
      <span className='absolute left-1/2 m-auto font-bold text-white'>-</span>
      <span className='font font-poppins text-[1rem] font-[400] text-white'>
        {time}
      </span>
    </div>
  );
};

export default PredictedValue;
