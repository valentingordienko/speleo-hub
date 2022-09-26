import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignalOutline.svg';

export function SignalOutline(props: TProps) {
  return (
    <Icon {...props} name="SignalOutline">
      <SVG />
    </Icon>
  );
}
