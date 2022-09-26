import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PickupSolid.svg';

export function PickupSolid(props: TProps) {
  return (
    <Icon {...props} name="PickupSolid">
      <SVG />
    </Icon>
  );
}
