import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/USBOutline.svg';

export function USBOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="USBOutline">
      <SVG />
    </Icon>
  );
}
