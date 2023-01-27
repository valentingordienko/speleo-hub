import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SIMCardSolid.svg';

export function SIMCardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SIMCardSolid">
      <SVG />
    </Icon>
  );
}
