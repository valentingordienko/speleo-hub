import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SIMCardSolid.svg';

export function SIMCardSolid(props: TProps) {
  return (
    <Icon {...props} name="SIMCardSolid">
      <SVG />
    </Icon>
  );
}
