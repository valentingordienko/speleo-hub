import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EraserSolid.svg';

export function EraserSolid(props: TProps) {
  return (
    <Icon {...props} name="EraserSolid">
      <SVG />
    </Icon>
  );
}
