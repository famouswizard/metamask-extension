import React from 'react';
import Popover from '../../ui/popover';
import {
  AlignItems,
  TextVariant,
  FlexDirection,
  JustifyContent,
  Display,
  TextAlign,
} from '../../../helpers/constants/design-system';
import {
  Text,
  Button,
  BUTTON_VARIANT,
  PopoverHeader,
} from '../../component-library';
import Box from '../../ui/box';
import { useI18nContext } from '../../../hooks/useI18nContext';

export default function AddSnapAccountPopup({
  onClose,
}: {
  onClose: () => void;
}) {
  const t = useI18nContext();

  return (
    <Popover
      className="add-snap-account-popup"
      footerProps={{
        justifyContent: AlignItems.center,
        flexDirection: FlexDirection.Column,
      }}
      footer={
        <>
          <Button
            variant={BUTTON_VARIANT.PRIMARY}
            block
            className="get-started_button"
            // onClick={onAccept}
            data-testid="get-started-button"
          >
            {t('getStarted')}
          </Button>
        </>
      }
    >
      <PopoverHeader onClose={onClose} margin={[4, 4, 4, 4]}>
        {t('addSnapAccountPopupTitle')}
      </PopoverHeader>
      <Box
        display={Display.Flex}
        padding={[4, 4, 4, 4]}
        flexDirection={FlexDirection.Column}
        justifyContent={JustifyContent.center}
        alignItems={AlignItems.center}
      >
        <Box marginBottom={4}>
          <img src="/images/add-snaps-image.svg" />
        </Box>
        <Text variant={TextVariant.bodyLgMedium} textAlign={TextAlign.Center}>
          {t('addSnapAccountPopupDescription')}
        </Text>
      </Box>
    </Popover>
  );
}
