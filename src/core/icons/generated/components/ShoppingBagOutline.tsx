import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShoppingBagOutline.svg';

export function ShoppingBagOutline(props: TProps) {
  return (
    <Icon {...props} name="ShoppingBagOutline">
      <SVG />
    </Icon>
  );
}
