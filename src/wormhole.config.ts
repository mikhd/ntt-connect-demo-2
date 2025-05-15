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

// const tokenRoutesConfig: TokenConfig = {
//   NTT: [
//     {
//       chain: "Sepolia",
//       manager: '0x7717b51C81c86FD7696F345F57DffC3cf92700b9',
//       token: '0x16B7237967bBd5DeC11bD6DcBc4475ee266b6Aa4',
//       transceiver: [
//         {
//           address: '0x1C292E9B097b1dbf76Af5043cD350C137d0996E9',
//           type: 'wormhole',
//         },
//       ],
//     },
//     {
//       chain: 'Solana',
//       manager: 'nttXMAn5ZY9XsmVr8sMBZBHbstaVDMaF1jHp1LV4W4k',
//       token: '3ocp3jy5s4in9LBmBtyhhRidP8QFao51XcCRqqVfjrDL',
//       // quoter: "",
//       transceiver: [
//         {
//           address: 'CgGtZC7A1tvRCx6kfvr3ZP71VJmPRMB4eitaSYY4gPMM',
//           type: 'wormhole',
//         },
//       ],
//     },
//     // {
//     //   chain: "ArbitrumSepolia",
//     //   manager: '0x0A33852cA8bEFc904e136320966dC50B1137131F',
//     //   token: '0xf5C51455e39233FBefC874235548Aea6a2281356',
//     //   transceiver: [
//     //     {
//     //       address: '0xF3cf167779AB9E0f7881c6983B870f9b19e38722',
//     //       type: 'wormhole',
//     //     },
//     //   ],
//     // },
//     // {
//     //   chain: "BaseSepolia",
//     //   manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
//     //   token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
//     //   transceiver: [
//     //     {
//     //       address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
//     //       type: 'wormhole',
//     //     },
//     //   ],
//     // },
//   ],
// }

// const manualRoute = nttManualRoute({
//   tokens: {
//     ...tokenRoutesConfig
//   },
// });
// const automaticRoute = nttAutomaticRoute({
//   tokens: {
//     ...tokenRoutesConfig,
//   },
// });

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
    // showHamburgerMenu: false,
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
      // key: 'NTTsep',
      symbol: 'NTT',
      // nativeChain: 'Sepolia',
      name: 'NTT Sepolia',
      tokenId: {
        chain: 'Sepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      // coinGeckoId: "",
      // icon: 'https://devnet.irys.xyz/CnzqYHms2c7rTN5Z1mX49yBz3Yd8naHgpibzZkzzwMvZ',
      icon: '/image1.png',
      decimals: 18
    },
    NTTarb: {
      // key: 'NTTarb',
      symbol: 'NTT',
      // nativeChain: 'ArbitrumSepolia',
      name: 'NTT Arbitrum',
      tokenId: {
        chain: 'ArbitrumSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      // coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    NTTbase: {
      // key: 'NTTbase',
      symbol: 'NTT',
      // nativeChain: 'BaseSepolia',
      name: 'NTT Base',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      // coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    NTTsol: {
      // key: 'NTTsol',
      symbol: 'NTT',
      // nativeChain: 'Solana',
      name: 'NTT Solana',
      tokenId: {
        chain: 'Solana',
        address: 'AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY'
      },
      // coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: '/image2.png',
      // icon: 'https://devnet.irys.xyz/dvUCHHu6NX1LjqQavEZubT1jodJxYgTQcPzePBTJnX2',
      decimals: 9
    }
  }
}

export default wormholeConfig;
