import React from 'react';

import { LoadingIndicator } from '@/components/icons/Icons';

const Loader = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-y-2'>
      <LoadingIndicator />
    </div>
  );
};

export default Loader;
