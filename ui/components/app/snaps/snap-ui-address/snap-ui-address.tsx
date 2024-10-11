import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  CaipAccountId,
  isHexString,
  parseCaipAccountId,
} from '@metamask/utils';
import { Box, Text } from '../../../component-library';
import {
  AlignItems,
  Display,
  TextColor,
  TextVariant,
} from '../../../../helpers/constants/design-system';
import BlockieIdenticon from '../../../ui/identicon/blockieIdenticon';
import Jazzicon from '../../../ui/jazzicon';
import { getUseBlockie } from '../../../../selectors';
import { shortenAddress } from '../../../../helpers/utils/util';
import { toChecksumHexAddress } from '../../../../../shared/modules/hexstring-utils';
import { useFallbackDisplayName } from '../../confirm/info/row/hook';

export type SnapUIAddressProps = {
  // The address must be a CAIP-10 string.
  address: string;
  diameter?: number;
  truncate?: boolean;
  displayName?: boolean;
  avatar?: boolean;
};

export const SnapUIAddress: React.FunctionComponent<SnapUIAddressProps> = ({
  address,
  diameter = 32,
  truncate = true,
  displayName = false,
  avatar = true,
}) => {
  const parsed = useMemo(() => {
    if (isHexString(address)) {
      // For legacy address inputs we assume them to be Ethereum addresses.
      // NOTE: This means the chain ID is not gonna be reliable.
      return parseCaipAccountId(`eip155:1:${address}`);
    }

    return parseCaipAccountId(address as CaipAccountId);
  }, [address]);
  const useBlockie = useSelector(getUseBlockie);
  const { displayName: addressName } = useFallbackDisplayName(address);

  // For EVM addresses, we make sure they are checksummed.
  const transformedAddress =
    parsed.chain.namespace === 'eip155'
      ? toChecksumHexAddress(parsed.address)
      : parsed.address;
  const formattedAddress = truncate
    ? shortenAddress(transformedAddress)
    : address;

  return (
    <Box display={Display.Flex} alignItems={AlignItems.center} gap={2}>
      {avatar &&
        (useBlockie ? (
          <BlockieIdenticon
            address={parsed.address}
            diameter={diameter}
            borderRadius="50%"
          />
        ) : (
          <Jazzicon
            namespace={parsed.chain.namespace}
            address={parsed.address}
            diameter={diameter}
            style={{ display: 'flex' }}
          />
        ))}
      {displayName ? (
        <Text variant={TextVariant.inherit} color={TextColor.inherit}>
          {addressName}
        </Text>
      ) : (
        <Text variant={TextVariant.inherit} color={TextColor.inherit}>
          {formattedAddress}
        </Text>
      )}
    </Box>
  );
};
