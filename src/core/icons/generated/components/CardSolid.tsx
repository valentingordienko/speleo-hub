import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardSolid.svg';

export function CardSolid(props: TProps) {
  return (
    <Icon {...props} name="CardSolid">
      <SVG />
    </Icon>
  );
}
