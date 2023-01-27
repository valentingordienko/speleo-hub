import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurkinaFaso.svg';

export function BurkinaFaso(props: TBaseProps) {
  return (
    <Icon {...props} name="BurkinaFaso">
      <SVG />
    </Icon>
  );
}
