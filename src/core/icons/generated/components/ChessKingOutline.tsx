import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChessKingOutline.svg';

export function ChessKingOutline(props: TProps) {
  return (
    <Icon {...props} name="ChessKingOutline">
      <SVG />
    </Icon>
  );
}
