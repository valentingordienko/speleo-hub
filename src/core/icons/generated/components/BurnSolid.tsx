import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurnSolid.svg';

export function BurnSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BurnSolid">
      <SVG />
    </Icon>
  );
}
