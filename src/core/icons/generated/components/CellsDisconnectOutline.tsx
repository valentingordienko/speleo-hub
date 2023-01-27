import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CellsDisconnectOutline.svg';

export function CellsDisconnectOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CellsDisconnectOutline">
      <SVG />
    </Icon>
  );
}
