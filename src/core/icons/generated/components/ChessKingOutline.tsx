import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChessKingOutline.svg';

export function ChessKingOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChessKingOutline">
      <SVG />
    </Icon>
  );
}
