import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FlagOfTheDeliveryService.svg';

export function FlagOfTheDeliveryService(props: TBaseProps) {
  return (
    <Icon {...props} name="FlagOfTheDeliveryService">
      <SVG />
    </Icon>
  );
}
