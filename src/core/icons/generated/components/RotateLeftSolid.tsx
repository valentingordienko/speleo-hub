import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateLeftSolid.svg';

export function RotateLeftSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RotateLeftSolid">
      <SVG />
    </Icon>
  );
}
