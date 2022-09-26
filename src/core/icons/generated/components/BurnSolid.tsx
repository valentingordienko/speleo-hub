import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BurnSolid.svg';

export function BurnSolid(props: TProps) {
  return (
    <Icon {...props} name="BurnSolid">
      <SVG />
    </Icon>
  );
}
