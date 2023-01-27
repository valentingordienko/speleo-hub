import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShoppingBagSolid.svg';

export function ShoppingBagSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ShoppingBagSolid">
      <SVG />
    </Icon>
  );
}
