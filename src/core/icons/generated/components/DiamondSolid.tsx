import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DiamondSolid.svg';

export function DiamondSolid(props: TProps) {
  return (
    <Icon {...props} name="DiamondSolid">
      <SVG />
    </Icon>
  );
}
