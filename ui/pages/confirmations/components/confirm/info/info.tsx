import { TransactionType } from '@metamask/transaction-controller';
import React, { useMemo } from 'react';
import { useConfirmContext } from '../../../context/confirm';
import { SignatureRequestType } from '../../../types/confirm';
import ApproveInfo from './approve/approve';
import BaseTransactionInfo from './base-transaction-info/base-transaction-info';
import NativeTransferInfo from './native-transfer/native-transfer';
import NFTTokenTransferInfo from './nft-token-transfer/nft-token-transfer';
import PersonalSignInfo from './personal-sign/personal-sign';
import SetApprovalForAllInfo from './set-approval-for-all-info/set-approval-for-all-info';
import TokenTransferInfo from './token-transfer/token-transfer';
import TypedSignV1Info from './typed-sign-v1/typed-sign-v1';
import TypedSignInfo from './typed-sign/typed-sign';

const Info = () => {
  const { currentConfirmation } = useConfirmContext();

  const ConfirmationInfoComponentMap = useMemo(
    () => ({
      [TransactionType.personalSign]: () => PersonalSignInfo,
      [TransactionType.signTypedData]: () => {
        const { version } =
          (currentConfirmation as SignatureRequestType)?.msgParams ?? {};
        if (version === 'V1') {
          return TypedSignV1Info;
        }
        return TypedSignInfo;
      },
      [TransactionType.contractInteraction]: () => BaseTransactionInfo,
      [TransactionType.deployContract]: () => BaseTransactionInfo,
      [TransactionType.tokenMethodApprove]: () => ApproveInfo,
      [TransactionType.tokenMethodIncreaseAllowance]: () => ApproveInfo,
      [TransactionType.tokenMethodSetApprovalForAll]: () =>
        SetApprovalForAllInfo,
      [TransactionType.tokenMethodTransfer]: () => TokenTransferInfo,
      [TransactionType.tokenMethodTransferFrom]: () => NFTTokenTransferInfo,
      [TransactionType.tokenMethodSafeTransferFrom]: () => NFTTokenTransferInfo,
      [TransactionType.simpleSend]: () => NativeTransferInfo,
    }),
    [currentConfirmation],
  );

  if (!currentConfirmation?.type) {
    return null;
  }

  const InfoComponent =
    ConfirmationInfoComponentMap[
      currentConfirmation?.type as keyof typeof ConfirmationInfoComponentMap
    ]();

  return <InfoComponent />;
};

export default Info;
