import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChessKingSolid.svg';

export function ChessKingSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ChessKingSolid">
      <SVG />
    </Icon>
  );
}
