import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FlagOfTheDeliveryService.svg';

export function FlagOfTheDeliveryService(props: TProps) {
  return (
    <Icon {...props} name="FlagOfTheDeliveryService">
      <SVG />
    </Icon>
  );
}
