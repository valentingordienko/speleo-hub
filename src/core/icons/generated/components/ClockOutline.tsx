import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClockOutline.svg';

export function ClockOutline(props: TProps) {
  return (
    <Icon {...props} name="ClockOutline">
      <SVG />
    </Icon>
  );
}
