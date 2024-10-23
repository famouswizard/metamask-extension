import { CHAIN_IDS } from './network';

export enum EtherDenomination {
  ETH = 'ETH',
  GWEI = 'GWEI',
  WEI = 'WEI',
}

const BSC_DEFAULT_BLOCK_EXPLORER_URL = 'https://bscscan.com/';
const BSC_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'BscScan';
const MAINNET_DEFAULT_BLOCK_EXPLORER_URL = 'https://etherscan.io/';
const MAINNET_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'Etherscan';
const GOERLI_DEFAULT_BLOCK_EXPLORER_URL = 'https://goerli.etherscan.io/';
const GOERLI_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'Goerli Etherscan';
const POLYGON_DEFAULT_BLOCK_EXPLORER_URL = 'https://polygonscan.com/';
const POLYGON_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'PolygonScan';
const AVALANCHE_DEFAULT_BLOCK_EXPLORER_URL = 'https://snowtrace.io/';
const AVALANCHE_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'Snowtrace';
const OPTIMISM_DEFAULT_BLOCK_EXPLORER_URL = 'https://optimistic.etherscan.io/';
const OPTIMISM_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'Optimism Explorer';
const ARBITRUM_DEFAULT_BLOCK_EXPLORER_URL = 'https://arbiscan.io/';
const ARBITRUM_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'ArbiScan';
const ZKSYNC_DEFAULT_BLOCK_EXPLORER_URL = 'https://explorer.zksync.io/';
const ZKSYNC_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'Zksync Explorer';
const LINEA_DEFAULT_BLOCK_EXPLORER_URL = 'https://lineascan.build/';
const LINEA_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'LineaScan';
const BASE_DEFAULT_BLOCK_EXPLORER_URL = 'https://basescan.org/';
const BASE_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL = 'BaseScan';

type BlockExplorerUrlMap = {
  [key: string]: string;
};

export const CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP: BlockExplorerUrlMap =
  {
    [CHAIN_IDS.BSC]: BSC_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.MAINNET]: MAINNET_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.POLYGON]: POLYGON_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.GOERLI]: GOERLI_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.AVALANCHE]: AVALANCHE_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.OPTIMISM]: OPTIMISM_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.ARBITRUM]: ARBITRUM_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.ZKSYNC_ERA]: ZKSYNC_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.LINEA_MAINNET]: LINEA_DEFAULT_BLOCK_EXPLORER_URL,
    [CHAIN_IDS.BASE]: BASE_DEFAULT_BLOCK_EXPLORER_URL,
  } as const;

export const CHAINID_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL_MAP: BlockExplorerUrlMap =
  {
    [CHAIN_IDS.BSC]: BSC_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.MAINNET]: MAINNET_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.POLYGON]: POLYGON_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.GOERLI]: GOERLI_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.AVALANCHE]: AVALANCHE_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.OPTIMISM]: OPTIMISM_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.ARBITRUM]: ARBITRUM_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.ZKSYNC_ERA]: ZKSYNC_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.LINEA_MAINNET]: LINEA_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
    [CHAIN_IDS.BASE]: BASE_DEFAULT_BLOCK_EXPLORER_HUMAN_READABLE_URL,
  } as const;
