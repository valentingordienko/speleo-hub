import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/USBOutline.svg';

export function USBOutline(props: TProps) {
  return (
    <Icon {...props} name="USBOutline">
      <SVG />
    </Icon>
  );
}
