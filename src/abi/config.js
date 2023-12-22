import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  network: "bsc",
  cacheProvider: false,
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: "https://bsc-dataseed4.binance.org",
      },
    },
  },
};

const CONFIG = {
  chainId: 56,
  // contractAddress: "0xa6CbC98Bb8AaAb6A54Ff2EF915152e4ba6d8D551",
  contractAddress: "0x67CFcCbB3fD8E2f9777D100F5D9B5311694C6076",
  tokenAddress: "0xf9114498b7f38f3337D6295a3a0f3edF8da71326",
  tokenDecimals: "18",
  tokenSymbol: "DEXO",
  networkName: "Binance Smart Chain",
};

export default CONFIG;
