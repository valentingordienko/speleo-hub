import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShopCartOutline.svg';

export function ShopCartOutline(props: TProps) {
  return (
    <Icon {...props} name="ShopCartOutline">
      <SVG />
    </Icon>
  );
}
