import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChessKingSolid.svg';

export function ChessKingSolid(props: TProps) {
  return (
    <Icon {...props} name="ChessKingSolid">
      <SVG />
    </Icon>
  );
}
