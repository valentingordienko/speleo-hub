import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateLeftSolid.svg';

export function RotateLeftSolid(props: TProps) {
  return (
    <Icon {...props} name="RotateLeftSolid">
      <SVG />
    </Icon>
  );
}
