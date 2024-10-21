import { TransactionMeta } from '@metamask/transaction-controller';
import { BigNumber } from 'bignumber.js';
import React from 'react';
import { useSelector } from 'react-redux';
import { CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP } from '../../../../../../../../shared/constants/network';
import {
  AvatarToken,
  AvatarTokenSize,
  Box,
  Text,
} from '../../../../../../../components/component-library';
import { getConversionRate } from '../../../../../../../ducks/metamask/metamask';
import {
  AlignItems,
  Display,
  FlexDirection,
  JustifyContent,
  TextColor,
  TextVariant,
} from '../../../../../../../helpers/constants/design-system';
import { useFiatFormatter } from '../../../../../../../hooks/useFiatFormatter';
import { getMultichainNetwork } from '../../../../../../../selectors/multichain';
import { useConfirmContext } from '../../../../../context/confirm';

const NativeSendHeading = () => {
  const { currentConfirmation: transactionMeta } =
    useConfirmContext<TransactionMeta>();

  const nativeAssetTransferValue =
    transactionMeta.txParams.value &&
    new BigNumber(transactionMeta.txParams.value)
      .dividedBy(new BigNumber(10).pow(18))
      .toNumber();

  const conversionRate = useSelector(getConversionRate);
  const fiatValue =
    conversionRate &&
    nativeAssetTransferValue &&
    new BigNumber(conversionRate)
      .times(nativeAssetTransferValue, 10)
      .toNumber();
  const fiatFormatter = useFiatFormatter();
  const fiatDisplayValue =
    fiatValue && fiatFormatter(fiatValue, { shorten: true });

  const multichainNetwork = useSelector(getMultichainNetwork);
  const ticker = multichainNetwork?.network?.ticker;

  const NetworkImage = (
    <AvatarToken
      src={
        multichainNetwork?.network?.rpcPrefs?.imageUrl ||
        CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[
          transactionMeta.chainId as keyof typeof CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
        ]
      }
      name={multichainNetwork?.nickname}
      size={AvatarTokenSize.Xl}
    />
  );

  const NativeAssetAmount = (
    <Text
      variant={TextVariant.headingLg}
      color={TextColor.inherit}
      marginTop={3}
    >
      {`${nativeAssetTransferValue} ${ticker}`}
    </Text>
  );

  const NativeAssetFiatConversion = (
    <Text variant={TextVariant.bodyMd} color={TextColor.textAlternative}>
      {fiatDisplayValue}
    </Text>
  );

  return (
    <Box
      display={Display.Flex}
      flexDirection={FlexDirection.Column}
      justifyContent={JustifyContent.center}
      alignItems={AlignItems.center}
      padding={4}
    >
      {NetworkImage}
      {NativeAssetAmount}
      {NativeAssetFiatConversion}
    </Box>
  );
};

export default NativeSendHeading;
