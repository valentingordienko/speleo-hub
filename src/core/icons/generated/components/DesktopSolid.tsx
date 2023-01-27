import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DesktopSolid.svg';

export function DesktopSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DesktopSolid">
      <SVG />
    </Icon>
  );
}
