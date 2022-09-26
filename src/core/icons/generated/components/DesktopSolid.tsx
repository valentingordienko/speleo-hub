import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DesktopSolid.svg';

export function DesktopSolid(props: TProps) {
  return (
    <Icon {...props} name="DesktopSolid">
      <SVG />
    </Icon>
  );
}
