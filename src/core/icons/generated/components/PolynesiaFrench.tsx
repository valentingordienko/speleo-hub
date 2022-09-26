import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PolynesiaFrench.svg';

export function PolynesiaFrench(props: TProps) {
  return (
    <Icon {...props} name="PolynesiaFrench">
      <SVG />
    </Icon>
  );
}
