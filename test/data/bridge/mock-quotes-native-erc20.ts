export const mockBridgeQuotesNativeErc20 = [
  {
    quote: {
      requestId: '381c23bc-e3e4-48fe-bc53-257471e388ad',
      srcChainId: 10,
      srcAsset: {
        chainId: 10,
        address: '0x0000000000000000000000000000000000000000',
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        icon: 'https://media.socket.tech/tokens/all/ETH',
        logoURI: 'https://media.socket.tech/tokens/all/ETH',
        chainAgnosticId: null,
      },
      srcTokenAmount: '9912500000000000',
      destChainId: 137,
      destAsset: {
        chainId: 137,
        address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
        symbol: 'USDC',
        name: 'Native USD Coin (POS)',
        decimals: 6,
        icon: 'https://media.socket.tech/tokens/all/USDC',
        logoURI: 'https://media.socket.tech/tokens/all/USDC',
        chainAgnosticId: 'USDC',
      },
      destTokenAmount: '24438902',
      feeData: {
        metabridge: {
          amount: '87500000000000',
          asset: {
            chainId: 10,
            address: '0x0000000000000000000000000000000000000000',
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: 18,
            icon: 'https://media.socket.tech/tokens/all/ETH',
            logoURI: 'https://media.socket.tech/tokens/all/ETH',
            chainAgnosticId: null,
          },
        },
      },
      bridgeId: 'socket',
      bridges: ['across'],
      steps: [
        {
          action: 'swap',
          srcChainId: 10,
          protocol: {
            name: 'zerox',
            displayName: '0x',
            icon: 'https://media.socket.tech/dexes/0x.svg',
          },
          srcAsset: {
            chainId: 10,
            address: '0x0000000000000000000000000000000000000000',
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: 18,
            icon: 'https://assets.polygon.technology/tokenAssets/eth.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/eth.svg',
            chainAgnosticId: null,
          },
          destAsset: {
            chainId: 10,
            address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: null,
          },
          srcAmount: '9912500000000000',
          destAmount: '24456223',
        },
        {
          action: 'bridge',
          srcChainId: 10,
          destChainId: 137,
          protocol: {
            name: 'across',
            displayName: 'Across',
            icon: 'https://miro.medium.com/max/800/1*PN_F5yW4VMBgs_xX-fsyzQ.png',
          },
          srcAsset: {
            chainId: 10,
            address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: null,
          },
          destAsset: {
            chainId: 137,
            address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
            symbol: 'USDC',
            name: 'Native USD Coin (POS)',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: 'USDC',
          },
          srcAmount: '24456223',
          destAmount: '24438902',
        },
      ],
      refuel: {
        action: 'refuel',
        srcChainId: 10,
        destChainId: 137,
        protocol: {
          name: 'refuel',
          displayName: 'Refuel',
          icon: '',
        },
        srcAsset: {
          chainId: 10,
          address: '0x0000000000000000000000000000000000000000',
          symbol: 'ETH',
          name: 'Ether',
          decimals: 18,
        },
        destAsset: {
          chainId: 137,
          address: '0x0000000000000000000000000000000000000000',
          symbol: 'MATIC',
          name: 'Matic',
          decimals: 18,
        },
        srcAmount: '1000000000000000',
        destAmount: '4405865573929566208',
      },
    },
    trade: {
      chainId: 10,
      to: '0xB90357f2b86dbfD59c3502215d4060f71DF8ca0e',
      from: '0x141d32a89a1e0a5ef360034a2f60a4b917c18838',
      value: '0x27147114878000',
      data: '0x3ce33bff00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002714711487800000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000f736f636b657441646170746572563200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f600000000000000000000000003a23f943181408eac424116af7b7790c94cb97a50000000000000000000000003a23f943181408eac424116af7b7790c94cb97a5000000000000000000000000000000000000000000000000000000000000008900000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c499c542cef5e3811e1192ce70d8cc03d5c33590000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000004f94ae6af800000000000000000000000000716a8b9dd056055c84b7a2ba0a016099465a51870000000000000000000000000000000000000000000000000000000000000e2037c6145a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000d64123506490000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001960000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000019d0000000000000000000000000000000000000000000000000000000000000ac00000000000000000000000000000000000000000000000000000000000000084ad69fa4f00000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000141d32a89a1e0a5ef360034a2f60a4b917c1883800000000000000000000000000000000000000000000000000000000000000890000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000904ee8f0b86000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000023375dc156080000000000000000000000000000000000000000000000000000000000000000c400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000828415565b0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000023375dc15608000000000000000000000000000000000000000000000000000000000001734d0800000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000004e000000000000000000000000000000000000000000000000000000000000005e0000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000023375dc15608000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000060000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff8500000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000320000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e69737761705633000000000000000000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000173dbd3000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000e592427a0aece92de3edee1f18e0157c0586156400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b42000000000000000000000000000000000000060001f40b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000000000000008ecb000000000000000000000000ad01c20d5886137e056775af56915de824c8fce5000000000000000000000000000000000000000000000000000000000000000b000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000004200000000000000000000000000000000000006000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000869584cd0000000000000000000000001000000000000000000000000000000000000011000000000000000000000000000000000000000021582def464917822ff6092c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000043a900000000000000000000000000000000000000000000000000000000000000c40000000000000000000000000000000000000000000000000000000000000002000000000000000000000000141d32a89a1e0a5ef360034a2f60a4b917c18838000000000000000000000000141d32a89a1e0a5ef360034a2f60a4b917c1883800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000003c499c542cef5e3811e1192ce70d8cc03d5c33590000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000174e7be000000000000000000000000000000000000000000000000000000000000008900000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000067041c47000000000000000000000000000000000000000000000000000000006704704d00000000000000000000000000000000000000000000000000000000d00dfeeddeadbeef765753be7f7a64d5509974b0d678e1e3149b02f41fec59a4aef7d9ac92ee5eeaf293cb28c2261e7fd322723a97cb83762f7302296636026e52849fdad0f9db6e1640f914660e6b13f5b1a29345344c8c5687abbf1b',
      gasLimit: 610414,
    },
    estimatedProcessingTimeInSeconds: 60,
  },
  {
    quote: {
      requestId: '4277a368-40d7-4e82-aa67-74f29dc5f98a',
      srcChainId: 10,
      srcAsset: {
        chainId: 10,
        address: '0x0000000000000000000000000000000000000000',
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        icon: 'https://media.socket.tech/tokens/all/ETH',
        logoURI: 'https://media.socket.tech/tokens/all/ETH',
        chainAgnosticId: null,
      },
      srcTokenAmount: '9912500000000000',
      destChainId: 137,
      destAsset: {
        chainId: 137,
        address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
        symbol: 'USDC',
        name: 'Native USD Coin (POS)',
        decimals: 6,
        icon: 'https://media.socket.tech/tokens/all/USDC',
        logoURI: 'https://media.socket.tech/tokens/all/USDC',
        chainAgnosticId: 'USDC',
      },
      destTokenAmount: '24256223',
      feeData: {
        metabridge: {
          amount: '87500000000000',
          asset: {
            chainId: 10,
            address: '0x0000000000000000000000000000000000000000',
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: 18,
            icon: 'https://media.socket.tech/tokens/all/ETH',
            logoURI: 'https://media.socket.tech/tokens/all/ETH',
            chainAgnosticId: null,
          },
        },
      },
      bridgeId: 'socket',
      bridges: ['celercircle'],
      steps: [
        {
          action: 'swap',
          srcChainId: 10,
          protocol: {
            name: 'zerox',
            displayName: '0x',
            icon: 'https://media.socket.tech/dexes/0x.svg',
          },
          srcAsset: {
            chainId: 10,
            address: '0x0000000000000000000000000000000000000000',
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: 18,
            icon: 'https://assets.polygon.technology/tokenAssets/eth.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/eth.svg',
            chainAgnosticId: null,
          },
          destAsset: {
            chainId: 10,
            address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: null,
          },
          srcAmount: '9912500000000000',
          destAmount: '24456223',
        },
        {
          action: 'bridge',
          srcChainId: 10,
          destChainId: 137,
          protocol: {
            name: 'cctp',
            displayName: 'Circle CCTP',
            icon: 'https://movricons.s3.ap-south-1.amazonaws.com/CCTP.svg',
          },
          srcAsset: {
            chainId: 10,
            address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: null,
          },
          destAsset: {
            chainId: 137,
            address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
            symbol: 'USDC',
            name: 'Native USD Coin (POS)',
            decimals: 6,
            icon: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            logoURI: 'https://assets.polygon.technology/tokenAssets/usdc.svg',
            chainAgnosticId: 'USDC',
          },
          srcAmount: '24456223',
          destAmount: '24256223',
        },
      ],
      refuel: {
        action: 'refuel',
        srcChainId: 10,
        destChainId: 137,
        protocol: {
          name: 'refuel',
          displayName: 'Refuel',
          icon: '',
        },
        srcAsset: {
          chainId: 10,
          address: '0x0000000000000000000000000000000000000000',
          symbol: 'ETH',
          name: 'Ether',
          decimals: 18,
        },
        destAsset: {
          chainId: 137,
          address: '0x0000000000000000000000000000000000000000',
          symbol: 'MATIC',
          name: 'Matic',
          decimals: 18,
        },
        srcAmount: '1000000000000000',
        destAmount: '4405865573929566208',
      },
    },
    trade: {
      chainId: 10,
      to: '0xB90357f2b86dbfD59c3502215d4060f71DF8ca0e',
      from: '0x141d32a89a1e0a5ef360034a2f60a4b917c18838',
      value: '0x27147114878000',
      data: '0x3ce33bff00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002714711487800000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000f736f636b657441646170746572563200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dc00000000000000000000000003a23f943181408eac424116af7b7790c94cb97a50000000000000000000000003a23f943181408eac424116af7b7790c94cb97a5000000000000000000000000000000000000000000000000000000000000008900000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c499c542cef5e3811e1192ce70d8cc03d5c33590000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000004f94ae6af800000000000000000000000000716a8b9dd056055c84b7a2ba0a016099465a51870000000000000000000000000000000000000000000000000000000000000c6437c6145a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000bc4123506490000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001960000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000018c0000000000000000000000000000000000000000000000000000000000000ac00000000000000000000000000000000000000000000000000000000000000084ad69fa4f00000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000141d32a89a1e0a5ef360034a2f60a4b917c1883800000000000000000000000000000000000000000000000000000000000000890000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000904ee8f0b86000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000023375dc156080000000000000000000000000000000000000000000000000000000000000000c400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000828415565b0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000023375dc15608000000000000000000000000000000000000000000000000000000000001734d0800000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000004e000000000000000000000000000000000000000000000000000000000000005e0000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000023375dc15608000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000060000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff8500000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000320000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e69737761705633000000000000000000000000000000000000000000000000000000000000000023375dc1560800000000000000000000000000000000000000000000000000000000000173dbd3000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000e592427a0aece92de3edee1f18e0157c0586156400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b42000000000000000000000000000000000000060001f40b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff850000000000000000000000000000000000000000000000000000000000008ecb000000000000000000000000ad01c20d5886137e056775af56915de824c8fce5000000000000000000000000000000000000000000000000000000000000000b000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000004200000000000000000000000000000000000006000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000869584cd00000000000000000000000010000000000000000000000000000000000000110000000000000000000000000000000000000000974132b87a5cb75e32f034280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000141d32a89a1e0a5ef360034a2f60a4b917c18838000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000890000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000c400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f9e43204a24f476db20f2518722627a122d31a1bc7c63fc15412e6a327295a9460b76bea5bb53b1f73fa6a15811055f6bada592d2e9e6c8cf48a855ce6968951c',
      gasLimit: 664389,
    },
    estimatedProcessingTimeInSeconds: 1560,
  },
];