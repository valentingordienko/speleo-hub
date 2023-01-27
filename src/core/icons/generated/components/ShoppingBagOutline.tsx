import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShoppingBagOutline.svg';

export function ShoppingBagOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ShoppingBagOutline">
      <SVG />
    </Icon>
  );
}
