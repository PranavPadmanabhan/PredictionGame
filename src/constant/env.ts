export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
