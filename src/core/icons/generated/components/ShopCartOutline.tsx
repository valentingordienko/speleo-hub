import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShopCartOutline.svg';

export function ShopCartOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ShopCartOutline">
      <SVG />
    </Icon>
  );
}
