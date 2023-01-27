import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PickupOutline.svg';

export function PickupOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PickupOutline">
      <SVG />
    </Icon>
  );
}
