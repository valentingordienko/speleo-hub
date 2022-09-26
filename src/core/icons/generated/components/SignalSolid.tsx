import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignalSolid.svg';

export function SignalSolid(props: TProps) {
  return (
    <Icon {...props} name="SignalSolid">
      <SVG />
    </Icon>
  );
}
