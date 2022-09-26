import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateRightSolid.svg';

export function RotateRightSolid(props: TProps) {
  return (
    <Icon {...props} name="RotateRightSolid">
      <SVG />
    </Icon>
  );
}
