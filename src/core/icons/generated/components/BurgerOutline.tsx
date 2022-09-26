import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurgerOutline.svg';

export function BurgerOutline(props: TProps) {
  return (
    <Icon {...props} name="BurgerOutline">
      <SVG />
    </Icon>
  );
}
