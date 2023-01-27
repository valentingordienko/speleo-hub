import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DiamondSolid.svg';

export function DiamondSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DiamondSolid">
      <SVG />
    </Icon>
  );
}
