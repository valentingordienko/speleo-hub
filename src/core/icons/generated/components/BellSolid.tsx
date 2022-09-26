import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BellSolid.svg';

export function BellSolid(props: TProps) {
  return (
    <Icon {...props} name="BellSolid">
      <SVG />
    </Icon>
  );
}
