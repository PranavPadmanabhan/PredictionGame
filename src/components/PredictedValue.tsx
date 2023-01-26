import React from 'react';

type props = {
  value: string;
  time: string;
  index?: number;
  needSeparator?: boolean;
  isActive: boolean;
  indexShown: boolean;
};

const PredictedValue = ({
  value,
  isActive,
  time,
  index,
  needSeparator,
  indexShown,
}: props) => {
  return (
    <div className='relative my-1 flex h-[20px] w-[90%] items-center justify-between pl-0 lg:pl-3'>
      {indexShown && (
        <span
          className={`font font-poppins text-[0.7rem] font-[400] ${
            isActive ? 'text-green-500' : 'text-white'
          } lg:text-[0.9rem]`}
        >
          {index}
        </span>
      )}
      <span
        className={`font font-poppins text-[0.7rem] font-[400] ${
          isActive ? 'text-green-500' : 'text-white'
        } lg:text-[0.9rem]`}
      >
        {value}
      </span>
      {needSeparator && (
        <span
          className={`absolute left-1/2 m-auto font-bold ${
            isActive ? 'text-green-500' : 'text-white'
          }`}
        >
          -
        </span>
      )}
      <span
        className={`font font-poppins text-[0.7rem] font-[400] ${
          isActive ? 'text-green-500' : 'text-white'
        } lg:text-[1rem]`}
      >
        {time}
      </span>
    </div>
  );
};

export default PredictedValue;
