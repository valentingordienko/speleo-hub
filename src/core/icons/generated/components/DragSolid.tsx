import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DragSolid.svg';

export function DragSolid(props: TProps) {
  return (
    <Icon {...props} name="DragSolid">
      <SVG />
    </Icon>
  );
}
