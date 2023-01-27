import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DragSolid.svg';

export function DragSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DragSolid">
      <SVG />
    </Icon>
  );
}
