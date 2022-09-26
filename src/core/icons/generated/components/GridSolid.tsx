import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GridSolid.svg';

export function GridSolid(props: TProps) {
  return (
    <Icon {...props} name="GridSolid">
      <SVG />
    </Icon>
  );
}
