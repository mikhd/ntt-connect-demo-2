/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  WormholeConnectConfig,
  WormholeConnectTheme,
  // nttRoutes,
  nttAutomaticRoute,
  nttManualRoute,
} from '@wormhole-foundation/wormhole-connect';

export const theme: WormholeConnectTheme = {
  mode: 'dark',
  // primary: '#78c4b6',
};


type TokenConfig = Parameters<typeof nttManualRoute>[0]["tokens"];
const tokenRoutesConfig: TokenConfig = {
  NTT: [
    {
      chain: "Sepolia",
      manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
      token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
      transceiver: [
        {
          address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: 'Solana',
      manager: 'Ntt6LhAEwLNbhWBxwDoSNsEoyWmeTL7fsSkWT3zRQTp',
      token: 'AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY',
      transceiver: [
        {
          address: 'ENsmSVAyALFCUKV1eywqfYfQYKKREWrYQYVsmMjx15rP',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: "ArbitrumSepolia",
      manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
      token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
      transceiver: [
        {
          address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: "BaseSepolia",
      manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
      token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
      transceiver: [
        {
          address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
          type: 'wormhole',
        },
      ],
    },
  ],
}

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ["Sepolia", 'Solana', 'ArbitrumSepolia', 'BaseSepolia'],
  tokens: [["Sepolia", '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'], ['Solana','AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY'], ['ArbitrumSepolia', '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'], ['BaseSepolia', '0x6015f77A4F6B51D2590BC195832bA529c1FabC98']],
  ui: {
    title: 'Wormhole NTT UI',
    previewMode: false,
    defaultInputs: {
      fromChain: 'Sepolia',
      toChain: 'Solana'
    },
  },
  routes: [
    nttManualRoute({
      tokens: {
        ...tokenRoutesConfig
      },
    }) as any,
    nttAutomaticRoute({
      tokens: {
        ...tokenRoutesConfig
      },
    }) as any,
  ],
  tokensConfig: {
    NTTsep: {
      symbol: 'NTT',
      name: 'NTT Sepolia',
      tokenId: {
        chain: 'Sepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      // icon: 'https://devnet.irys.xyz/CnzqYHms2c7rTN5Z1mX49yBz3Yd8naHgpibzZkzzwMvZ',
      icon: '/image1.png',
      decimals: 18
    },
    NTTarb: {
      symbol: 'NTT',
      name: 'NTT Arbitrum',
      tokenId: {
        chain: 'ArbitrumSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    NTTbase: {
      symbol: 'NTT',
      name: 'NTT Base',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    NTTsol: {
      symbol: 'NTT',
      name: 'NTT Solana',
      tokenId: {
        chain: 'Solana',
        address: 'AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY'
      },
      icon: '/image2.png',
      // icon: 'https://devnet.irys.xyz/dvUCHHu6NX1LjqQavEZubT1jodJxYgTQcPzePBTJnX2',
      decimals: 9
    }
  }
}

export default wormholeConfig;
