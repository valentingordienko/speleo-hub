import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringModernOutline.svg';

export function AcquiringModernOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AcquiringModernOutline">
      <SVG />
    </Icon>
  );
}
