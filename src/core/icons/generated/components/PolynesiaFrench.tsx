import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PolynesiaFrench.svg';

export function PolynesiaFrench(props: TBaseProps) {
  return (
    <Icon {...props} name="PolynesiaFrench">
      <SVG />
    </Icon>
  );
}
