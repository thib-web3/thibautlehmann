import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import {
  connectorsForWallets,
  darkTheme,
  RainbowKitProvider,
  wallet,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

const infuraId = process.env.NEXT_PUBLIC_REACT_APP_INFURA_ID_RINKEBY



const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    infuraProvider({ apiKey: infuraId }),
    publicProvider()
  ]

);

const connectors = connectorsForWallets([
  {
    groupName: 'CV',
    wallets: [

      wallet.metaMask({ chains }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: 'CV', chains: chains })
    ],
  },
]);
const demoAppInfo = {
  appName: 'BrokeAsses NFTs',
};

const client = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return <>

    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        style: {
          background: '#363636',
          color: '#fff',
          maxWidth: '500px'
        },
        // Default options for specific types
        success: {
          theme: {
            primary: 'green',
            secondary: 'black',
          },
          icon: '✅',
        },
        error: {
          theme: {
            primary: 'red',
            secondary: 'black',
          },
          icon: '❌',
        },
      }}
    />
    <WagmiConfig client={client}>
      <RainbowKitProvider appInfo={demoAppInfo} theme={darkTheme({
        accentColor: '#FFFFFF',
        accentColorForeground: '#0C0E27',
        borderRadius: 'small',
      })} chains={chains}>



        <>
          <Component {...pageProps} />

        </>




      </RainbowKitProvider>
    </WagmiConfig>
  </>
}

export default MyApp
