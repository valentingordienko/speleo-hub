import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurkinaFaso.svg';

export function BurkinaFaso(props: TProps) {
  return (
    <Icon {...props} name="BurkinaFaso">
      <SVG />
    </Icon>
  );
}
