import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DesktopOutline.svg';

export function DesktopOutline(props: TProps) {
  return (
    <Icon {...props} name="DesktopOutline">
      <SVG />
    </Icon>
  );
}
