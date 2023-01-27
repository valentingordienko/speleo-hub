import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateRightSolid.svg';

export function RotateRightSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RotateRightSolid">
      <SVG />
    </Icon>
  );
}
