import React from 'react';
import { Provider, useSelector } from 'react-redux';
import configureStore from '../../../store/store';
import { BridgeQuotesModal } from './bridge-quotes-modal';
import { createBridgeMockStore } from '../../../../test/jest/mock-store';
import mockBridgeQuotesErc20Erc20 from '../../../../test/data/bridge/mock-quotes-erc20-erc20.json';
import { BridgeQuoteDetailsModal } from './bridge-quote-details-modal';
import { getBridgeQuotes } from '../../../ducks/bridge/selectors';
import { Modal, ModalOverlay } from '../../../components/component-library';

// export const NoTokenPricesAvailableStory = () => {
//   return <BridgeQuotesModal onClose={() => {}} isOpen={true} />;
// };
// NoTokenPricesAvailableStory.storyName = 'Token Prices Not Available';
// NoTokenPricesAvailableStory.decorators = [
//   (story) => (
//     <Provider
//       store={configureStore(
//         createBridgeMockStore({}, {}, { quotes: mockBridgeQuotesErc20Erc20 }),
//       )}
//     >
//       {story()}
//     </Provider>
//   ),
// ];

export const DefaultStory = () => {
  const { activeQuote } = useSelector(getBridgeQuotes);
  return activeQuote ? (
    <BridgeQuoteDetailsModal
      onBack={() => {}}
      onSelect={() => {}}
      expandedQuote={activeQuote}
    />
  ) : null;
};

const storybook = {
  title: 'Pages/Bridge/BridgeQuoteDetailsModal',
  component: DefaultStory,
};

DefaultStory.storyName = 'Default';
DefaultStory.decorators = [
  (Story) => (
    <Modal isOpen={true} className="quotes-modal" onClose={() => {}}>
      <ModalOverlay />
      <Provider
        store={configureStore(
          createBridgeMockStore(
            {},
            {
              toNativeExchangeRate: 1,
              toTokenExchangeRate: 0.99,
            },
            { quotes: mockBridgeQuotesErc20Erc20 },
            {
              currencyRates: {
                ETH: { conversionRate: 2514.5 },
              },
              marketData: {
                '0x1': {
                  ['0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85']: {
                    price: 0.00039762010419237126,
                    contractPercentChange1d: 0.004,
                    priceChange1d: 0.00004,
                  },
                },
              },
            },
          ),
        )}
      >
        <Story />
      </Provider>
    </Modal>
  ),
];

// export const PositiveArbitrage = () => {
//   return <BridgeQuotesModal onClose={() => {}} isOpen={true} />;
// };
// PositiveArbitrage.decorators = [
//   (story) => (
//     <Provider
//       store={configureStore(
//         createBridgeMockStore(
//           {},
//           {
//             toNativeExchangeRate: 1,
//             toTokenExchangeRate: 2.1,
//           },
//           { quotes: mockBridgeQuotesErc20Erc20 },
//           {
//             currencyRates: {
//               ETH: { conversionRate: 2514.5 },
//             },
//             marketData: {
//               '0x1': {
//                 ['0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85']: {
//                   price: 0.00039762010419237126,
//                   contractPercentChange1d: 0.004,
//                   priceChange1d: 0.00004,
//                 },
//               },
//             },
//           },
//         ),
//       )}
//     >
//       {story()}
//     </Provider>
//   ),
// ];

// export const QuoteDetails = () => {
//   return <BridgeQuotesModal onClose={() => {}} isOpen={true} />;
// };
// QuoteDetails.decorators = [
//   (story) => (
//     <Provider
//       store={configureStore(
//         createBridgeMockStore(
//           {},
//           {
//             toNativeExchangeRate: 1,
//             toTokenExchangeRate: 2.1,
//           },
//           { quotes: mockBridgeQuotesErc20Erc20 },
//           {
//             currencyRates: {
//               ETH: { conversionRate: 2514.5 },
//             },
//             marketData: {
//               '0x1': {
//                 ['0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85']: {
//                   price: 0.00039762010419237126,
//                   contractPercentChange1d: 0.004,
//                   priceChange1d: 0.00004,
//                 },
//               },
//             },
//           },
//         ),
//       )}
//     >
//       {story()}
//     </Provider>
//   ),
// ];

export default storybook;
