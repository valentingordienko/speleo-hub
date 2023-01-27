import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DesktopOutline.svg';

export function DesktopOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DesktopOutline">
      <SVG />
    </Icon>
  );
}
