import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClockSolid.svg';

export function ClockSolid(props: TProps) {
  return (
    <Icon {...props} name="ClockSolid">
      <SVG />
    </Icon>
  );
}
