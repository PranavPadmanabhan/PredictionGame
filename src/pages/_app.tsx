import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import AppContextProvider from '@/contexts/AppContext';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors, wallets } = getDefaultWallets({
  chains,
  appName: 'prediction',
});

const wagmiClient = createClient({
  connectors,
  provider,
});

export { provider, wallets };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
