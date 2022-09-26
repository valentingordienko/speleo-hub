import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PickupOutline.svg';

export function PickupOutline(props: TProps) {
  return (
    <Icon {...props} name="PickupOutline">
      <SVG />
    </Icon>
  );
}
