import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShopCartSolid.svg';

export function ShopCartSolid(props: TProps) {
  return (
    <Icon {...props} name="ShopCartSolid">
      <SVG />
    </Icon>
  );
}
