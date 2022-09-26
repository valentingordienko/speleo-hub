import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShoppingBagSolid.svg';

export function ShoppingBagSolid(props: TProps) {
  return (
    <Icon {...props} name="ShoppingBagSolid">
      <SVG />
    </Icon>
  );
}
