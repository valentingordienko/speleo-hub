import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardSolid.svg';

export function CardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CardSolid">
      <SVG />
    </Icon>
  );
}
