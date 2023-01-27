import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurgerOutline.svg';

export function BurgerOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BurgerOutline">
      <SVG />
    </Icon>
  );
}
