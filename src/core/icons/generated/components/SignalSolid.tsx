import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignalSolid.svg';

export function SignalSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SignalSolid">
      <SVG />
    </Icon>
  );
}
