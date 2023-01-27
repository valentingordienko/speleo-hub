import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeliveryOutline.svg';

export function DeliveryOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeliveryOutline">
      <SVG />
    </Icon>
  );
}
