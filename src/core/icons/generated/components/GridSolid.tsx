import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GridSolid.svg';

export function GridSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GridSolid">
      <SVG />
    </Icon>
  );
}
