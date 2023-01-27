import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EraserSolid.svg';

export function EraserSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="EraserSolid">
      <SVG />
    </Icon>
  );
}
