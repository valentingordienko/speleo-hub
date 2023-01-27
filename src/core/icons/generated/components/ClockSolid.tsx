import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClockSolid.svg';

export function ClockSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ClockSolid">
      <SVG />
    </Icon>
  );
}
