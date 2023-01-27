import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShopCartSolid.svg';

export function ShopCartSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ShopCartSolid">
      <SVG />
    </Icon>
  );
}
