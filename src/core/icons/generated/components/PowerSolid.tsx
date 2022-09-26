import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PowerSolid.svg';

export function PowerSolid(props: TProps) {
  return (
    <Icon {...props} name="PowerSolid">
      <SVG />
    </Icon>
  );
}
