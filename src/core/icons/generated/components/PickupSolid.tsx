import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PickupSolid.svg';

export function PickupSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PickupSolid">
      <SVG />
    </Icon>
  );
}
