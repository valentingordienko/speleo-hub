import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DollarSolid.svg';

export function DollarSolid(props: TProps) {
  return (
    <Icon {...props} name="DollarSolid">
      <SVG />
    </Icon>
  );
}
