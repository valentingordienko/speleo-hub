import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeliveryOutline.svg';

export function DeliveryOutline(props: TProps) {
  return (
    <Icon {...props} name="DeliveryOutline">
      <SVG />
    </Icon>
  );
}
