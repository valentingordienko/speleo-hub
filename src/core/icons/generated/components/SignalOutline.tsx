import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignalOutline.svg';

export function SignalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SignalOutline">
      <SVG />
    </Icon>
  );
}
