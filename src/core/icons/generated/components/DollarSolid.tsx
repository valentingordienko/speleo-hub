import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DollarSolid.svg';

export function DollarSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DollarSolid">
      <SVG />
    </Icon>
  );
}
