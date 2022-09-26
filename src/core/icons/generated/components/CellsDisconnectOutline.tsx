import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CellsDisconnectOutline.svg';

export function CellsDisconnectOutline(props: TProps) {
  return (
    <Icon {...props} name="CellsDisconnectOutline">
      <SVG />
    </Icon>
  );
}
